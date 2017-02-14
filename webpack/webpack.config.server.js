const path          = require('path');
const webpack       = require('webpack');
const nodeExternals = require('webpack-node-externals');

const babelrc = {
  presets       : [
    [
      'latest',
      // {
      //   es2015: {
      //     modules: false,
      //   },
      // },
    ],
    'react',
    'stage-0',
  ],
  plugins       : [
    ['transform-react-jsx', { pragma: 'preact.h' }],
    'transform-decorators-legacy',
  ],
  babelrc       : false,
  cacheDirectory: true,
};

module.exports = {
  devtool  : 'sourcemap',
  entry    : './src/server/',
  target   : 'node',
  node     : {
    __dirname: false,
  },
  output   : {
    path    : path.join(__dirname, '../build'),
    filename: 'backend.js',
  },
  externals: [nodeExternals()],
  plugins  : [
    new webpack.ProvidePlugin({
      preact: 'preact',
    }),
    new webpack.BannerPlugin({
      banner   : 'require("source-map-support").install();',
      raw      : true,
      entryOnly: false,
    }),
  ],
  module   : {
    rules: [
      {
        test   : /\.jsx?$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query  : babelrc,
      },
    ],
  },
};
