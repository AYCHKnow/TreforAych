const webpack = require('webpack'),
  path = require('path'),
  env = require('./utils/env'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  WriteFilePlugin = require('write-file-webpack-plugin'),
  loadersDir = path.join(__dirname, 'webpack', 'loaders')
const { sync } = require('glob')

module.exports = {
  entry: {
    content: path.join(__dirname, 'src', 'content.js'),
    background: path.join(__dirname, 'src', 'background.js')
  },
  chromeExtensionBoilerplate: {
    notHotReload: ['background']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.*/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    // expose and write the allowed env vars on the compiled bundle
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    }),
    env.NODE_ENV == 'development' ? new webpack.NamedModulesPlugin() : null,
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      {from: 'src/assets/', to: 'src/assets/'}
    ]),
  ].filter(function(val) { return val !== null; })
};
