require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");

const server = createServer();

// TODO user express middleware to use cookies
// TODO user express middleware populate user

// start the node server from createServer. This starts up the
// GQL-Yoga server, and passes it the credentials it needs to connect to
// Prisma
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
