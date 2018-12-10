const Mutations = {
  async createItem(paren, args, ctx, info) {
    // TODO: Check if they are logged in 
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);
    
    console.log(item);

    return item;
  }

  // createDog(paren, args, ctx, info) {
  //   global.dogs = global.dogs || [];
  //   // create a dog
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  // },
};

module.exports = Mutations;
