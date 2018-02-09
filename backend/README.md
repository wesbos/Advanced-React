What are all these files?!

What are the steps:


When you want to add a new function:

1. Open your `schema.graphql` and add it to the mutatiions
2. Add a mutation resolver to match that new mutation:

  ```
    addToCart(parent, args, ctx, info) {
      console.log('ADding an item to cart!');
    },
  ```
3. Create a client-side Mutation that will accept the arguments and call it


### Installing Docker


