const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in variables.env)
  secret: process.env.PRISMA_SECRET, // taken from prisma/prisma.yml (value is set in .env)
  debug: false, // log all GraphQL queries & mutations
});

module.exports = db;