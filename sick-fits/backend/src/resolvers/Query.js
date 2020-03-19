const { forwardTo } = require('prisma-binding');

const Query = {
    // forwardTo is a quick way to mock up CRUD functinoality with a DB. It has NO authentication.
    items: forwardTo('db')
    // async items(parents, args, ctx, info) {
    //     const items = await ctx.db.query.items();
    //     return items;
    // }
};

module.exports = Query;
