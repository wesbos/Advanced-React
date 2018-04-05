const { getUserId, Context, checkForUserId } = require('../utils');
const { forwardTo } = require('prisma-binding');

const Query = {
  items(parent, args, ctx, info) {
    console.log('ITEMS!');
    // check auth
    return ctx.db.query.items({ ...args }, info);
  },

  itemsConnection: forwardTo('db'),

  // TODO: Make sure they own this order before looking it up
  order: forwardTo('db'),

  me(parent, args, ctx, info) {
    const Authorization = ctx.request.get('Authorization');
    if (!Authorization || Authorization === 'null') {
      console.log('Authorization is null');
      return null;
    }
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },

  async orders(parent, args, ctx, info) {
    const userId = getUserId(ctx);
    console.log(info);
    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId },
        },
      },
      info
    );
  },

  async users(parent, args, ctx, info) {
    // TODO Permissions
    const userId = getUserId(ctx);
    return ctx.db.query.users({}, info);
  },
};

module.exports = Query;
