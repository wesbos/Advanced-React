/**
 * We define the structure of a Mutatio in ./schema.graphql
 *
 * Here, we define the implementation of each schema-defined Mutation
 */

const Mutation = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    // tell prisma to create an item in the DB, and return the result of the Muta
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info // explains how the functino knows what to return, in this case the created Item
    );

    return item;
  },

  async updateItem(parent, args, ctx, info) {
    // copy the inputs
    const updates = { ...args };
    // remove the id since we're not updating the field
    delete updates.id;
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id // since we removed it from the updates
        }
      },
      info
    );
  }
};

module.exports = Mutation;
