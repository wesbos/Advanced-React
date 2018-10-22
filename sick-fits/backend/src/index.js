// let's go!
require('dotenv').config({ path: 'variables.env' });
const createServer = require('createServer');
const db = require('./db');

const server = createServer();
// TODO use express middleware to handle cookies(JWT)
// TODO use express middleware to populate current user

server.start({
  cors: {
    credentials: true,
    origin: ${}
  }
})
