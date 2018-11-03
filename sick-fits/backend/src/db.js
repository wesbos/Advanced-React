const { Prisma } = require("prisma-binding");

// connect to the remote Prisma DB, and enable querying
const db = new Prisma({
  // all of the available GQL Muta/Quer from Prisma. This is not the same
  // as the ones we expose ourselves
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
