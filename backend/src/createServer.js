const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      // detail resolvers
      Mutation,
      Query,
    },
    context: req => ({
      ...req,
      db: new Prisma({
        typeDefs: 'src/generated/prisma.graphql',
        endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in variables.env)
        secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
        debug: false, // log all GraphQL queries & mutations
      }),
    }),
  });
}

module.exports = createServer;
