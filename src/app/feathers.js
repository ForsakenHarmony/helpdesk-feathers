import Client from 'socket.io-client';

import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import authentication from 'feathers-authentication-client';
import feathersocket from 'feathers-socketio/client';

// import { route } from 'preact-router';

// import debug from 'debug';
// const log = debug('app:feather');

// Establish a Socket.io connection to the local server
const socket = new Client();

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const app = feathers()
  .configure(feathersocket(socket))
  .configure(hooks())
  // Use localStorage to store our login token
  .configure(authentication({
    storage: window.localStorage,
  }));

// app.authenticate().then((res) => {
//   log('Authenticated', res);
//   return app.passport.verifyJWT(res.accessToken);
// }).then((payload) => {
//   log('JWT Payload', payload);
//   return app.service('users').get(payload.userId);
// }).then((user) => {
//   app.set('user', user);
//   log('User', app.get('user'));
//   route('/chat');
// }).catch((e) => {
//   log('ERROR', e);
// });

export default app;
