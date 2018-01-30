const routes = (module.exports = require('next-routes')());

routes
  .add('about')
  .add('item', '/item/:itemId/:slug')
  .add('items', '/items/:page');
