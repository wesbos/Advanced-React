// this file connects to the romote prisma db giving us the ability to query it with javascript

const { Prisma } = require("prisma-binding");

const db = new Prisma({
    typeDefs: "src/generated/prisma.graphql",
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false,
});

module.exports = db;
