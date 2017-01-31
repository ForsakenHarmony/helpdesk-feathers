// const auth = require('feathers-authentication').hooks;
// const local = require('feathers-authentication-local').hooks;
// const permissions = require('feathers-permissions').hooks;
// const hooks       = require('feathers-hooks');
const debug = require('debug')('server:services:user:hooks');

// permissions.setPermissions
//   = require('feathers-permissions/lib/hooks/setPermissions');

const { hooks, auth, local, permissions } = require('../../../hooks');

exports.before = {
  all   : [],
  find  : [
    auth.authenticate(['jwt', 'local']),
    permissions.checkPermissions({ service: 'users' }),
    permissions.isPermitted(),
  ],
  get   : [
    auth.authenticate(['jwt', 'local']),
    (hook) => {
      debug(hook);
    },
    permissions.checkPermissions({ service: 'users' }),
    permissions.isPermitted(),
  ],
  create: [
    (hook) => {
      debug(hook);
    },
    local.hashPassword(),
  ],
  update: [
    auth.authenticate(['jwt', 'local']),
    permissions.checkPermissions({ service: 'users' }),
    permissions.isPermitted(),
    local.hashPassword(),
  ],
  patch : [
    auth.authenticate(['jwt', 'local']),
    permissions.checkPermissions({ service: 'users' }),
    permissions.isPermitted(),
    local.hashPassword(),
  ],
  remove: [
    auth.authenticate(['jwt', 'local']),
    permissions.checkPermissions({ service: 'users' }),
    permissions.isPermitted(),
  ],
};

exports.after = {
  all   : [hooks.remove('password')],
  find  : [],
  get   : [],
  create: [
    (hook) => {
      debug(hook);
    },
    permissions.setPermissions({
      permissions: ['users:*:[id]'], field: 'permissions',
    }),
  ],
  update: [],
  patch : [],
  remove: [],
};
