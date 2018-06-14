const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    resolvers: {
      Mutation,
      Query,
    },
    context: req => ({ ...req, db }),
  });
}

module.exports = createServer;
