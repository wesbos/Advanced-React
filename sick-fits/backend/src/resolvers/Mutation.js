const Mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO check if the user is logged in

        const item = await ctx.db.mutation.createItem({ data: { ...args } }, info);

        return item;
    }
};

module.exports = Mutations;
