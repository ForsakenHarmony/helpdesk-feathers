const handler  = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger   = require('./logger');
const ssr      = require('./ssr');

module.exports = function middleware() {
  const app = this;
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  
  if (process.env.NODE_ENV !== 'production') {
// eslint-disable-next-line global-require
    app.configure(require('./webpack'));
  }
  app.use(ssr());
  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
