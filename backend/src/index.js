const createServer = require('./createServer');

const server = createServer();

server.express.use((req, res, next, db) => {
  console.log('MIDDLEWARE!');
  next();
});

server.start({ port: 4444 }, deets => {
  console.log(`Server is running on http://localhost:${deets.port}`);
});

// overwrite console.log
const chalk = require('chalk');

// global.console.l = (...butta) => console.log(chalk.bold.yellow(...butta));
global.console.l = console.log;
