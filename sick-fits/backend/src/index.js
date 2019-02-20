// Will start our node server
// Make sure our variable our available to our application by require them here since it's the entry point of our application
require("dotenv").config({ path: "variables.env" });
// Import the createServer() function that we've made in our createServer.js
const createServer = require("./createServer");
// Import our database that we created
const db = require("./db");

const server = createServer();

// TODO Use express middlware to handle coolies (JWT = Json Web Tokens)
// TODO Use express middlware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
