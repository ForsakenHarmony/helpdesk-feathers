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
  devtool: 'hidden-source-map',
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
      path.join(__dirname, './app/client'),
      'node_modules',
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.ProvidePlugin({
      preact: 'preact',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/client/index.html'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug   : false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      // mangle: {
      //   screw_ie8: true,
      //   keep_fnames: true,
      // },
      // compress: {
      //   screw_ie8: true,
      // },
      comments: false,
    }),
  ],
  module : {
    rules: [
      {
        enforce: 'pre',
        test   : /\.jsx?$/,
        exclude: /node_modules/,
        loader : 'eslint-loader',
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
