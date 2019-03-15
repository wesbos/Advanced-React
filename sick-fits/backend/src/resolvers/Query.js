const { forwardTo } = require('prisma-binding');
const { hasPermissions } = require('../utilR');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    // console.log(ctx.request.userId);
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // console.log(ctx.request);
    if (!ctx.request.userId) {
      throw new Error('you must be loggin');
    }
    hasPermissions(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // console.log(info);
    return ctx.db.query.users({}, info);
  }
};

module.exports = Query;
