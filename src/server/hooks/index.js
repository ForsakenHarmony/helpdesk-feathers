const hooks          = require('feathers-hooks-common');
const auth           = require('feathers-authentication').hooks;
const local          = require('feathers-authentication-local').hooks;
const permissions    = require('feathers-permissions').hooks;
const setPermissions = require('feathers-permissions/lib/hooks/setPermissions');

permissions.setPermissions = setPermissions;

module.exports = {
  hooks,
  auth,
  local,
  permissions,
};
