const { graphQLServer } = require('graphql-yoga');
const { Query } = require('./resolvers/Query.js');
const { Mutations } = require('./resolvers/Mutations.js');
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