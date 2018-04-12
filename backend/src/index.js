const jwt = require('jsonwebtoken');
const createServer = require('./createServer');

const server = createServer();

// 1. Check JWT
server.express.use((req, res, next) => {
  const Authorization = req.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

// 2. Get User from their ID
server.express.use(async (req, res, next) => {
  if (!req.userId) return next();
  const user = await server.context().db.query.user(
    { where: { id: req.userId } },
    `
    { id, permissions, email, name }
  `
  );
  req.user = user;
  next();
});

server.start({ port: 4444 }, deets => {
  console.log(`Server is running on http://localhost:${deets.port}`);
});
