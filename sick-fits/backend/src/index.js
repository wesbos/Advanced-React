require('dotenv').config({
  path: '.env'
});
const createServer = require('./createServer.js');
const db = require('./db.js');

const server = createServer();

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
}, serverDetails => {
  console.log(`Server now running on http://localhost:${serverDetails.port}`);
});