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
      info
    );

    return item;
  }
};

module.exports = Mutation;
