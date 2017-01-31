const authentication = require('./authentication');
const user           = require('./user');
const tickets        = require('./tickets');

module.exports = function services() {
  const app = this;
  
  app.configure(authentication);
  app.configure(user);
  app.configure(tickets);
};
