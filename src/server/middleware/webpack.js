/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const hot     = require('webpack-hot-middleware');
const dev     = require('webpack-dev-middleware');
const config  = require('../../../webpack/webpack.config.dev');

module.exports = function webpackMiddleware() {
  const app = this;
  
  const compiler = webpack(config);
  
  const devMiddleware = dev(compiler, { noInfo: true, publicPath: '/' });
  const hotMiddleware = hot(compiler);
  
  app.use(devMiddleware);
  app.use(hotMiddleware);
};
