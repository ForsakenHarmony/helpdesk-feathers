const debug = require('debug');

debug.enable('server:*');
const log = debug('server:index');

const app = require('./app');

const port = app.get('port');
// const server = app.listen(port);

const inits = Object.keys(app.services).map((path) => {
  const service = app.service(path);
  
  if (typeof service.init === 'function') {
    return service.init();
  }
  
  return Promise.resolve();
});

let server;

Promise.all(inits).then(() => {
  server = app.listen(3030);
  
  server.on('listening', () => {
    log(`Feathers application started on ${app.get('host')}:${port}`);
  });
}).catch((err) => {
  log('ERROR', err);
});

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});
