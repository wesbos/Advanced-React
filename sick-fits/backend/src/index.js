/* eslint-disable */
require('dotenv').config({ path: 'variables.env' });
/* eslint-enable */
const jwt = require('jsonwebtoken');
const createServer = require('./createServer');
const db = require('./db');
const cookieParser = require('cookie-parser');

const server = createServer();

server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

// 2. Get User from their ID
server.express.use(async (req, res, next) => {
  if (!req.userId) return next();
  const user = await db.query.user({ where: { id: req.userId } }, `{ id, permissions, email, name }`);
  req.user = user;
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
    port: 4444,
  },
  deets => {
    console.log(`Server is running on http://localhost:${deets.port}`);
  }
);
