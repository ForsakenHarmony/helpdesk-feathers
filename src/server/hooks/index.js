const hooks       = require('feathers-hooks-common');
const auth        = require('feathers-authentication').hooks;
const local       = require('feathers-authentication-local').hooks;
const permissions = require('feathers-permissions').hooks;
permissions.setPermissions
                  = require('feathers-permissions/lib/hooks/setPermissions');

module.exports = {
  hooks,
  auth,
  local,
  permissions,
};
