// This is the actual GraphQL Express server, that sits on top of the Apollo server
// We have two servers in this app: GraphQL-Yoga and Prisma
// // Context for authentication purposes
const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation.js');
const Query = require('./resolvers/Query.js');
const db = require('./db');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
