// let's go!
require('dotenv').config({path: 'variables.env'});
const createServer = require('./createServer');
const db = require('./db');

// spinup graphql yoga server
const server = createServer();

// TODO: Use express middleware to handle cookies (JWT)
// TODO: Use Express middleware to populate current user

// startup server
server.start(
    {
      cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
      },
  }, deets => {
  // make clickable link to port
  console.log(`Server is Now running on Port http:/localhost:${deets.port}`);
  }
)