const { forwardTo } = require("prisma-binding");

/**
 * Same notes as in ./Mutations
 */

const Query = {
  // any time you have a query thats exactly the same on the FE end as the BE
  // query, we can use fowardTo() to skip all of the functional definitinos
  items: forwardTo("db")
};

module.exports = Query;

/*
ALT definition of the above

async items(parent, args, ctx, info) {
  const items = await ctx.db.query.items();

  return items;
} 

*/
