//  graphQL yoga is an express server 
const { GraphQLServer } = require('graphql-yoga');
// Resolvers = where does data come from and what does it do in the DB
// query + mutation.. query => pull data, mutation => push/put data 
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// create graphQL Yoga Server

function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        // git rid of weird errors that pop up
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        // expose db to every single request
        context: req => ({...req, db}),
    });

};
module.exports = createServer;