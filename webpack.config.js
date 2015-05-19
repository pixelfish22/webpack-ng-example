var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var srcPath = path.join(__dirname, 'src');
var dstPath = path.join(__dirname, 'build');
var npmPath = path.join(__dirname, 'node_modules');

var config = {
    context: srcPath,

    entry: {
        app: ['webpack/hot/dev-server', './index.js'],
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
            {test: /\.js$/, loader: 'baggage?[dir].html&[dir].scss'}
        ],
        loaders: [
            {test: /\.json$/, loader: "json"},
            {test: /\.js$/, loader: "ng-annotate"},
            {test: /\.css$/, loader: "style!css?sourceMap"},
            {test: /\.html$/, loader: "ngtemplate?relativeTo=" + srcPath + "/!html"},
            { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" }, // simple SASS processing (no source maps though)
            // {test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')}, // externalize css
            {test: /\.(png|jpg|gif)/, loader: 'url-loader?limit=10000&name=[path][name].[ext]'}
        ]
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.HotModuleReplacementPlugin()
        // new webpack.optimize.UglifyJsPlugin({sourceMap: true})
        // new ExtractTextPlugin('styles.css'), //used to extract sass/css into a single file (for sourcemaps)
    ],

    devServer: {
        contentBase: "./build",
        info: false, //  --no-info option
        hot: true,
        inline: true,
        port: 9090
    },

    addVendor: function (name, path, exports) {
        this.entry.vendors.push(name);
        this.module.noParse.push(path);
        this.resolve.alias[name] = path;
        if (exports) {
            this.module.loaders.push({test: path, loader: 'exports?' + exports});
        }
    }
};

config.addVendor('angular', path.join(npmPath, 'angular/angular.min.js'), 'angular');
config.addVendor('angular-ui-router', path.join(npmPath, 'angular-ui-router/build/angular-ui-router.min.js'));

module.exports = config;
