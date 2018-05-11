const { hasPermission } = require('../utils');

const { forwardTo } = require('prisma-binding');

const Query = {
  items(parent, args, ctx, info) {
    console.log(args);
    return ctx.db.query.items({ ...args }, info);
  },

  itemsConnection: forwardTo('db'),

  // TODO: Make sure they own this order before looking it up
  // order: forwardTo('db'),
  async order(parent, args, ctx, info) {
    // 1. make sure they are signed in
    if (!ctx.request.userId) {
      throw new Error('You Must be signed in to view an order');
    }

    // 2. Create the query
    const where = {
      id: args.id,
      user: {
        id: ctx.request.userId,
      },
    };
    // 3. Fire off the query
    const [order] = await ctx.db.query.orders({ where }, info);

    // 4. Check that they are allowed to view the order
    if (order.user.id !== ctx.request.userId || hasPermission(ctx.request.user, ['ADMIN'])) {
      throw new Error("You don't have permission");
    }
    // 5. If everything checks out, return the order
    return order;
  },

  me(parent, args, ctx, info) {
    const Authorization = ctx.request.get('Authorization');
    if (!Authorization || Authorization === 'null') {
      return null; // don't error out, just return nothing
    }

    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },

  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('You must be signed in to see your orders');
    }
    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId },
        },
      },
      info
    );
  },
};

module.exports = Query;
