const { getUserId, Context, checkForUserId } = require('../utils');
const { forwardTo } = require('prisma-binding');

const Query = {
  items(parent, args, ctx, info) {
    // check auth
    return ctx.db.query.items({ ...args }, info);
  },

  itemsConnection: forwardTo('db'),

  feed(parent, args, ctx, info) {
    return ctx.db.query.posts({}, info);
  },

  drafts(parent, args, ctx, info) {
    // const id = getUserId(ctx);

    const where = {
      isPublished: false,
      // author: {
      //   id,
      // },
    };

    return ctx.db.query.posts({ where }, info);
  },

  post(parent, { id }, ctx, info) {
    return ctx.db.query.post({ where: { id } }, info);
  },

  me(parent, args, ctx, info) {
    console.l('me!');
    const Authorization = ctx.request.get('Authorization');
    if (!Authorization || Authorization === 'null') {
      console.log('Authorization is null');
      return null;
    }
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },
  async orders(parent, args, ctx, info) {
    console.l('--------------------FETCHING ORDERS---------------------');
    console.log(args);
    return ctx.db.query.orders({}, info);
    console.l('--------------------FETCHING ORDERS---------------------');
  },
};

module.exports = Query;
