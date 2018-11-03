const { GraphQLServer } = require("graphql-yoga");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const db = require("./db");

/**
 * Create the Yoga Server
 *
 * This is the interface that communicates between the FE app, and the Prisma
 * Database. This layer is used to both:
 * - Run Queries/Mutations on the Prisma defined DB Schema
 * - Control which parts of the Schema we expose to the app, since Prisma
 *  dumps the entire set of queries/mutations, and we might not want to allow
 *  all of the options
 */

function createServer() {
  return new GraphQLServer({
    // what mutations and queries do we want to support
    typeDefs: "src/schema.graphql",
    // matching implementations of the above (must be 1:1)
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    // connext the request to the DB
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
