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
            'core/sass',
            'core/models',
            'core/constants',
            'core/utils',
            'layout'
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
            {test: /\.js$/, loader: 'baggage?[dir].html&[dir].scss'}
        ],
        loaders: [
            {test: /\.json$/, loader: "json"},
            {test: /\.js$/, loader: "ng-annotate"},
            {test: /\.css$/, loader: "css?sourceMap"},
            {test: /\.html$/, loader: "ngtemplate?relativeTo=" + srcPath + "/!html"},
            // { test: /\.scss$/, loader: "style!css!sass" }, // simple SASS processing (no source maps though)
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')}, // externalize css
            {test: /\.(png|jpg|gif)/, loader: 'url-loader?limit=10000&mimetype=image/png&name=[path][name].[ext]'}
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        // new webpack.optimize.UglifyJsPlugin({sourceMap: true})
    ],

    addVendor: function (name, path) {
        this.entry.vendors.push(name);
        this.module.noParse.push(path);
        this.resolve.alias[name] = path;
        this.module.loaders.push({test: path, loader: 'exports?' + name});
    }
};

config.addVendor('angular', path.join(npmPath, 'angular/angular.min.js'));

module.exports = config;
