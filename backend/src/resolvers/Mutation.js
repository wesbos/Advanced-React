const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { forwardTo } = require('prisma-binding');
const { getUserId, Context } = require('../utils');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const mail = require('../mail');

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
    console.l('Add to cart calle');
    const userId = getUserId(ctx);
    // get the current user
    const currentUser = await ctx.db.query.user(
      {
        where: { id: userId },
      },
      '{ cart { id, quantity item { id } }}'
    );

    // find out if the user currently has this item in their cart
    const existingCartItemIndex = currentUser.cart.findIndex(cartItem => cartItem.item.id === args.id);

    if (existingCartItemIndex >= 0) {
      console.l('======This item already exists in the cart============');
      const cartItem = currentUser.cart[existingCartItemIndex];
      return ctx.db.mutation.updateCartItem({
        where: { id: cartItem.id },
        data: {
          quantity: cartItem.quantity + 1,
        },
      });
    }

    const res = await ctx.db.mutation.updateUser({
      where: { id: userId },
      data: {
        cart: {
          create: [
            {
              item: {
                connect: {
                  id: args.id,
                },
              },
              quantity: 1,
            },
          ],
        },
      },
    });
    console.log(res);
    // return res;
  },
  async removeFromCart(parent, args, ctx, info) {
    // delete that cart item
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
};

module.exports = mutations;
