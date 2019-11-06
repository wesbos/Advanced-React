const mutations = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info) //info contains the query to pass to the backend
    return item;
  },

  async updateItem(parent, args, ctx, info) {
    const updates = {
      ...args
    };

    delete updates.id;

    const item = await ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    }, info) //info contains the query to pass to the backend
    return item;
  },

  async deleteItem(parent, args, ctx, info) {
    const where = {
      id: args.id
    }
    //to be used in the future
    const item = await ctx.db.query.item({
      where
    }, `{id, title}`);

    return await ctx.db.mutations.deleteItem({
      where
    }, info);
  }
};

module.exports = mutations;