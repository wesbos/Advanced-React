const Mutations = {
  async createItem(parent, args, ctx, info) {
    //todo check
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    return item;
  }
};


module.exports = Mutations;
