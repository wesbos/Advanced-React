// start the node server
require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// TODO user express middleware to use cookies
// TODO user express middleware populate user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(
      `Yoga Server is now running on port http://localhost:${deets.port}`
    );
  }
);
