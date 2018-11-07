const { forwardTo } = require("prisma-binding");

/**
 * Same notes as in ./Mutations
 */

const Query = {
  // Any time you have a query thats exactly the same on the FE end as the BE
  // query, we can use fowardTo() to skip all of the functional definitinos
  //
  // Alt way of defining the below
  // async items(parent, args, ctx, info) {
  //   return await ctx.db.query.items();
  // }
  items: forwardTo("db"),

  item: forwardTo("db")
};

module.exports = Query;
