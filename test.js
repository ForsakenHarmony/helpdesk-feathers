const test    = require('ava');
// const assert  = require('assert');
const request = require('request');
const app     = require('./src/server/app');

test.beforeEach.cb((t) => {
  t.context.server = app.listen(3030);
  t.context.server.once('listening', () => t.end());
});

test.afterEach.cb((t) => {
  t.context.server.close(t.end);
});

// TODO: has to wait for webpack, not sure how
test.cb('starts and shows the index page', (t) => {
  request('http://localhost:3030', (err, res, body) => {
    t.true(body.indexOf('<html>') !== -1);
    t.end();
  });
});
