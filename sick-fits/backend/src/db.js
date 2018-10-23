// this file connects to the remote Prisma db and gives us the ability to query it with Javascript
const { Prisma } = require('prisma-binding');
// Instantiates the Database
const db = new Prisma({
  typeDefs:'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
