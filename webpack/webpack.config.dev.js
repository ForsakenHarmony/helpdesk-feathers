const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelrc = {
  presets       : [
    [
      'latest',
      {
        es2015: {
          modules: false,
        },
      },
    ],
    'react',
    'stage-0',
  ],
  plugins       : [
    // ['external-helpers'],
    ['transform-react-jsx', { pragma: 'preact.h' }],
    'transform-decorators-legacy',
    // 'react-hot-loader/babel',
  ],
  babelrc       : false,
  cacheDirectory: true,
};

module.exports = {
  devtool: 'eval',
  entry  : [
    // 'webpack-hot-middleware/client',
    // 'react-hot-loader/patch',
    './src/client/',
  ],
  output : {
    path      : path.join(__dirname, '../public'),
    filename  : 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias     : {
      react      : 'preact-compat',
      'react-dom': 'preact-compat',
    },
    modules   : [
      path.join(__dirname, './app/client/index.jsx'),
      'node_modules',
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    // new DashboardPlugin({ port: 3001 }), // wait for webinterface
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.ProvidePlugin({
      preact: 'preact',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/client/index.html'),
    }),
  ],
  module : {
    rules: [
      {
        enforce: 'pre',
        test   : /\.jsx?$/,
        exclude: /node_modules/,
        loader : 'eslint-loader',
      // }, {
      //   test   : /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader : 'babel-loader',
      //   query  : babelrc,
      }, {
        test   : /\.jsx?$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query  : babelrc,
      }, {
        test  : /\.html$/,
        loader: 'html-loader',
        query : {
          interpolate: true,
        },
      }, {
        test  : /\.css$/,
        loader: 'file-loader',
        query : {
          name: '[name].[ext]',
        },
      }, {
        test   : /\.scss$/,
        loaders: ['file-loader?name=[name].css', 'sass-loader'],
      }, {
        test  : /\.ico|\.png|\.jpg$/,
        loader: 'file-loader',
        query : {
          name: '[name].[ext]',
        },
      },
    ],
  },
};
