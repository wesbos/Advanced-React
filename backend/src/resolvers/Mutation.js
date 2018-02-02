const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { forwardTo } = require('prisma-binding');
const { getUserId, Context } = require('../utils');

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

  async login(parent, { email, password }, ctx, info) {
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
    console.log('gonna delete one');
    console.log(args);
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
    console.log('Updating an item');
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
    console.log(updatedPost);
    return updatedPost;
  },
};

module.exports = mutations;
