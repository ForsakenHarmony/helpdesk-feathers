'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('tickets service', function() {
  it('registered the tickets service', () => {
    assert.ok(app.service('tickets'));
  });
});
