const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
require('dotenv').config();

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const AuthPayload = require('./resolvers/AuthPayload');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      // detail resolvers
      Mutation,
      Query,
      AuthPayload,
    },
    context: req => ({
      ...req,
      db: new Prisma({
        typeDefs: 'src/generated/prisma.graphql',
        endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
        secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
        debug: false, // log all GraphQL queries & mutations
      }),
    }),
  });
}

module.exports = createServer;
