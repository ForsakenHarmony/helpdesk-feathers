const { auth, permissions } = require('../../../hooks');

exports.before = {
  all   : [
    auth.authenticate(['jwt', 'local']),
    permissions.checkPermissions({ service: 'tickets' }),
    permissions.isPermitted(),
  ],
  find  : [],
  get   : [],
  create: [],
  update: [],
  patch : [],
  remove: [],
};

exports.after = {
  all   : [],
  find  : [],
  get   : [],
  create: [],
  update: [],
  patch : [],
  remove: [],
};
