import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  assertObjectType,
  assertInputObjectType,
} from 'graphql';

export function addCompatibilityForQueries(schema: GraphQLSchema) {
  const schemaConfig = schema.toConfig();
  const queryTypeConfig = schema.getQueryType()!.toConfig();
  const newQueryType = new GraphQLObjectType({
    ...queryTypeConfig,
    fields: {
      ...queryTypeConfig.fields,
      allOrders: queryTypeConfig.fields.orders,
      Order: queryTypeConfig.fields.order,
      Product: queryTypeConfig.fields.product,
      _allProductsMeta: {
        type: new GraphQLObjectType({
          name: '_AllProductsMeta',
          fields: { count: { type: GraphQLInt } },
        }),
        async resolve(source, args, context) {
          return { count: await context.query.Product.count() };
        },
      },
      allProducts: {
        ...queryTypeConfig.fields.products,
        args: {
          ...queryTypeConfig.fields.products.args,
          first: { type: GraphQLInt },
        },
        resolve(source, { first, take, ...args }, context, info) {
          return queryTypeConfig.fields.products.resolve!(
            source,
            { take: take ?? first, ...args },
            context,
            info
          );
        },
      },
    },
  });
  const mutationTypeConfig = schema.getMutationType()!.toConfig();
  const newMutationType = new GraphQLObjectType({
    ...mutationTypeConfig,
    fields: {
      ...mutationTypeConfig.fields,
      deleteProduct: {
        type: assertObjectType(schema.getType('Product')),
        args: {
          id: { type: GraphQLID },
          where: { type: assertInputObjectType(schema.getType('ProductWhereUniqueInput')) },
        },
        resolve(source, { id, where }, context, info) {
          return mutationTypeConfig.fields.deleteProduct.resolve!(
            source,
            { where: where || { id } },
            context,
            info
          );
        },
      },
    }
  })
  return new GraphQLSchema({
    ...schemaConfig,
    query: newQueryType,
    mutation: newMutationType,
    types: schemaConfig.types.map(x => (x.name === 'Query' ? newQueryType : x.name === 'Mutation' ? newMutationType : x)),
  });
}
