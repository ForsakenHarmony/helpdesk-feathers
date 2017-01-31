const service = require('feathers-rethinkdb');
const rethink = require('rethinkdbdash');

const hooks = require('./hooks/index');

module.exports = function user() {
  const app = this;

  const r = rethink({
    db: 'feathers',
  });

  const options = {
    Model   : r,
    name    : 'tickets',
    watch   : true,
    paginate: { // Enable pagination
      default: 2,
      max    : 4,
    },
  };

  const serv = service(options);

  // Initialize our service with any options it requires
  app.use('/api/tickets', serv);

  // Get our initialize service to that we can bind hooks
  const userService = app.service('/api/tickets');

  userService.init().then(() => {
    // Set up our before hooks
    userService.before(hooks.before);

    // Set up our after hooks
    userService.after(hooks.after);
  });
};
