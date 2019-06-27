const Mutations = {
    async createItem(parent, args, ctx, info) {
        //TODO: Check if they are logged in

        const item = await ctx.db.mutation.createItem({ //as per referencing in createServer
            data: {
                ...args //same thing as putting each field
            }
        }, info);

        // console.log(item);
        
        return item;
    }
    /*
    *EXAMPLE USING GLOBAL SCOPE
    createDog(parent, args, ctx, info) {
        global.dogs = global.dogs || [];
        //create a dog!
        const newDog = { name: args.name };
        global.dogs.push(newDog);
        return newDog;
        
        console.log(args);
    }
    */    
};

module.exports = Mutations;

