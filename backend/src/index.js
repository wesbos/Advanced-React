const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const AuthPayload = require('./resolvers/AuthPayload');

const server = new GraphQLServer({
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

// // This is an example of custom express middlware
// server.express.use((req, res, next) => {
//   // console.log("Hi I'm middlware");
//   next();
// });

server.start(() => console.log('Server is running on http://localhost:4000'));

// overwrite console.log
const chalk = require('chalk');

// global.console.l = (...butta) => console.log(chalk.bold.yellow(...butta));
global.console.l = console.log;
