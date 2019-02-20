// This file connects to the remote prisma DB and gives us the ability to query it with JS
const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql", // exactly why we pull it down from the Prisma in that post deploy hook is so we can feed it into this
  endpoint: process.env.PRISMA_ENDPOINT, // give it access to our Prisma database, like where the Prisma DB lives (variables.env)
  secret: process.env.PRISMA_SECRET, // like the password to your prisma database
  debug: false
});

module.exports = db;
