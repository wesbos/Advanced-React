const Mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO check if the user is logged in

        const item = await ctx.db.mutation.createItem({ data: { ...args } }, info);

        return item;
    },

    async updateItem(parent, args, ctx, info) {
        // first take a copy of the updates
        const updates = { ...args };
        // remove id
        delete updates.id;
        const item = await ctx.db.mutation.updateItem({ data: { ...updates }, where: { id: args.id } }, info);
        
        return item;
    },

    async deleteItem(parent, args, ctx, info) {
        const where = { id: args.id };
        // 1. find item
        const item = await ctx.db.query.item({ where }, `{ id title }`)
        // 2. check if they own item or have permissions
        // TODO
        // 3. delete it
        return ctx.db.mutation.deleteItem({ where }, info);
    }
};

module.exports = Mutations;
