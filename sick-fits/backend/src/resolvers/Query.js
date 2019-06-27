const { forwardTo } = require ('prisma-binding');
const Query = {
    /*
    *EXAMPLE USING GLOBAL SCOPE
    dogs(parent, args, ctx, info) {
            global.dogs = global.dogs || [];
            return global.dogs;
        },
    */
   /*
    Since the below is an example of a predefined query from 
    the schema.graphql we can use 'forwardTo' to get this query
    without writting it below.

    async items(parent, args, ctx, info){
        console.log('getting items');
        const items = await ctx.db.query.items();
        return items;
    }

    USE THIS INSTEAD "items: forwardTo('db'),"
    */
   items: forwardTo('db'), 
};

module.exports = Query;

