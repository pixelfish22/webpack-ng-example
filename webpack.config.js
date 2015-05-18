var path = require('path');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var srcPath = path.join(__dirname, 'src');
var dstPath = path.join(__dirname, 'dist');
var npmPath = path.join(__dirname, 'node_modules');

var config = {
  context: srcPath,

  entry: {
    app: './index.js',
    vendors: []
  },

  output: {
    path: dstPath,
    filename: '[name].js'
  },

  externals: {},

  resolve: {
    alias: {},
    root: [
      srcPath
    ],
    modulesDirectories: [
      'node_modules',
      'bower_components',
      'ui',
      'core',
      'core/api',
      'core/models',
      'core/constants',
      'core/utils'
    ]
  },

  resolveLoader: {
    root: npmPath
  },

  // source-map
  // inline-source-map
  // cheap-module-eval-source-map

  devtool: 'inline-source-map',

  module: {
    noParse: [],
    preLoaders: [
      // Look for HTML and CSS files to go with the UI components
      {test: /\.js$/, loader: 'baggage?[dir].html&[dir].scss'}
    ],
    loaders: [
      {test: /\.json$/, loader: "json"},
      {test: /\.js$/, loaders: ['ng-annotate']},
      {test: /\.css$/, loader: "css?sourceMap"},
      {test: /\.html$/, loader: "ngtemplate?relativeTo=" + srcPath + "/!html"},
      //{ test: /\.scss$/, loader: "style!css!sass" }, // simple SASS processing (no source maps though)
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')}, // externalize css
      {test: /\.(png|jpg|gif)/, loader: 'url-loader?limit=10000&mimetype=image/png&name=[path][name].[ext]'}
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ],

  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.loaders.push({test: path, loader: 'exports?' + name});
    this.entry.vendors.push(name);
    this.module.noParse.push(path);
  }
};


var angPath = path.join(npmPath, 'angular/angular.min.js');

config.addVendor('angular', angPath);

module.exports = config;
