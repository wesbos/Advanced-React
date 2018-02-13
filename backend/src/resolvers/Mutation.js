const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { forwardTo } = require('prisma-binding');
const { getUserId, Context } = require('../utils');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const mail = require('../mail');
const stripe = require('../stripe');

const mutations = {
  // Signup Mutations
  async signup(parent, args, ctx, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },

  async signin(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },

  // Creation of Post Mutations
  async createItem(parent, args, ctx, info) {
    // TODO - they should be signed in when creating an item for sale
    // TODO: The user should be saved to the item so they can manage it
    return ctx.db.mutation.createItem({ data: { ...args } }, info);
  },

  async deleteItem(parent, args, ctx, info) {
    // TODO - handle auth for deleting an item
    return ctx.db.mutation.deleteItem(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },

  async updateItem(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;
    return ctx.db.mutation.updateItem({
      where: { id: args.id },
      data: {
        ...updates,
      },
    });
  },

  async createDraft(parent, { title, text }, ctx, info) {
    // const userId = getUserId(ctx);
    const userId = getUserId(ctx);
    return ctx.db.mutation.createPost(
      {
        data: {
          title,
          text,
          isPublished: false,
          author: {
            connect: { id: userId },
          },
        },
      },
      info
    );
  },

  async publish(parent, { id }, ctx, info) {
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true },
      },
      info
    );
  },

  async deletePost(parent, { id }, ctx, info) {
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.db.mutation.deletePost({ where: { id } });
  },

  // Wes Added this brand new one!
  async updatePost(parent, args, ctx, info) {
    const updatedPost = await ctx.db.mutation.updatePost({
      where: { id: args.id },
      data: {
        title: args.title,
        text: args.text,
      },
    });
    return updatedPost;
  },

  // Send password request
  async requestReset(parent, args, ctx, info) {
    // 1. find if there is a user with that email
    const user = await ctx.db.query.user({ where: { email: args.email } });

    if (!user) {
      throw new Error(`No user with the email ${args.email}`);
    }
    console.log(user);
    // 2. Set a reset token, and a reset date
    const resetToken = (await promisify(randomBytes)(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    console.log({ resetToken, resetTokenExpiry });
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });

    console.log(res);
    // 3. Send them their token via email
    const mailRes = await mail.sendMail({
      from: 'wesbos@gmail.com',
      to: 'wesbos@gmail.com',
      subject: 'Your password reset token',
      html: `Here is your reset link: http://localhost:3000/reset?resetToken=${resetToken}`,
    });

    return res.updateUser;
  },

  async resetPassword(parent, args, ctx, info) {
    // 1. Check that the passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    // 2. Check that this is a legit resetToken
    // 3. Check that it's not expired
    // Note: If we didn't need the user here, we could also use db.exists()
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000, // within the last hour
      },
    });

    if (!user) {
      throw new Error('This token is either invalid or expired.');
    }

    // 4. Hash the password
    const password = await bcrypt.hash(args.password, 10);

    // 5. Update the users password
    // clean up the resetToken fields at the same time
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    // 6. send back the Auth Payload for the GraphQL request on the client
    return {
      // TODO: This should use sub instead of userId
      token: jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET),
      user: updatedUser,
    };
  },
  /*
    Add to cart
  */
  async addToCart(parent, args, ctx, info) {
    console.l('Add to cart called');
    const userId = getUserId(ctx);
    if (!userId) {
      throw new Error('You must be signed in to add to cart!');
    }

    // 1. Check if there is a CartItem for this user and item already
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id },
      },
    });

    if (existingCartItem) {
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 1 },
        },
        info
      );
    }

    // Otherwise create a new cartItem
    return ctx.db.mutation.createCartItem(
      {
        data: {
          user: {
            connect: {
              id: userId,
            },
          },
          item: {
            connect: { id: args.id },
          },
        },
      },
      info
    );
  },
  // delete that cart item
  async removeFromCart(parent, args, ctx, info) {
    return ctx.db.mutation.deleteCartItem({
      where: { id: args.id },
    });
    // const userId = getUserId(ctx);
    // return ctx.db.query.user({ where: { id: userId } }, '{ id, cart { id, quantity }}');
    // const cartItem = await ctx.db.query.cartItem({
    //   where: { id: args.id },
    // });

    // console.log(cartItem);
    // return cartItem;
  },
  async createOrder(parent, args, ctx, info) {
    const userId = getUserId(ctx);
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      '{ id, name, email, cart { id, quantity, item { price, id } }}'
    );
    console.log('-------USER-----');
    console.log(user);
    console.log('-------USER-----');
    // 1. Recalculate the total for the price
    const amount = user.cart.reduce((tally, cartItem) => tally + cartItem.item.price * cartItem.quantity, 0);
    // TODO Error Handling
    // 2.1 Create a Stripe Customer
    const customer = await stripe.customers.create({
      email: user.email,
    });
    console.log(customer);
    // 2.3 Charge the stripe token
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: args.token,
    });

    // Save this order to the database
    const items = user.cart.map(cartItem => ({ id: cartItem.item.id }));
    console.l('---Gonna connect these items: ----');
    console.log(items);
    console.l('---Gonna connect these items: ----');
    const order = await ctx.db.mutation.createOrder({
      data: {
        total: charge.amount,
        charge: charge.id,
        items: {
          connect: items,
        },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    console.l('--------ORDER-------------');
    console.log(order);
    console.l('--------ORDER-------------');
    return order;
    // 4. Send an email with their order
    // 5. Send the order back
    // 6. Clean up, clear the users cart adn send back { user, order }
  },
};

module.exports = mutations;
