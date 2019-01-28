const Mutations = {
 async createItem(parent,args,ctx,info){
    
    // TODO Check if they are logged in
    // ctx is established in the createServer.. 
    // ctx is a promise.. so async/await for it to be resolved
    // info has the actual query.. so stx.database.mutation needs to be passed to back-end
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      },
    }, info);

    return item;
  },
  // createDog(parent, args, ctx, info){
    //     // where we create a dog
    //     console.log(args);
    // },
    
};
module.exports = Mutations;
