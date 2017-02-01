'use strict';

const assert = require('assert');
const app    = require('../../../src/server/app');

describe('tickets service', () => {
  it('registered the tickets service', () => {
    assert.ok(app.service('tickets'));
  });
});
