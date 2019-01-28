//  graphQL yoga is an express server 
const { GraphQLServer } = require('graphql-yoga');
// Resolvers = where does data come from and what does it do in the DB
// query + mutation.. query => pull data, mutation => push/put data 
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// create graphQL Yoga Server

// How queries / mutations
// Create query, mutation in Schema.. mimic it in the mutation/query.js (also where the logic is)
// then you can fetch info with query.. and manipulate it
// Schema.graphql (type query, type mutation) -> Mutation/Query.js -> App
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