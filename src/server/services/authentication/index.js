const auth  = require('feathers-authentication');
const local = require('feathers-authentication-local');
const jwt   = require('feathers-authentication-jwt');
// const oauth1 = require('feathers-authentication-oauth1');
const oauth2 = require('feathers-authentication-oauth2');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const GoogleTokenStrategy = require('passport-google-token').Strategy;

module.exports = function authentication() {
  const app = this;

  const config = app.get('auth');
  
  // config.google.strategy = GoogleStrategy;
  // config.google.tokenStrategy = GoogleTokenStrategy;
  
  const options = {
    name: 'google',
    Strategy: GoogleStrategy,
  };

  // app.set('auth', config);
  app.configure(auth(config))
    .configure(jwt())
    .configure(local())
    // .configure(oauth1(options))
    .configure(oauth2(options));
};
