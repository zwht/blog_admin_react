var path = require('path');
var process = require('process');
var webpack = require("webpack");

var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin('./assets/css/style.css');

var node_modules_dir = path.join(__dirname, 'node_modules');
var deps = [
    {
        url: 'react/dist/react.min.js',
        noParse: true
    },
    {
        url: 'react-dom/dist/react-dom.min.js'
    },
    {
        url: 'react-router/umd/ReactRouter.min.js'
    }
];

var config = {
    entry: [
        //'webpack-dev-server/client?http://localhost:9999',
        path.resolve(__dirname, './app/index.jsx')
    ],
    resolve: {
        alias: {}
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '/assets/js/bundle.js',
        publicPath: "http://127.0.0.1:8889/"
    },

    devServer: {
        inline: true,
        //open: true,
        host: '127.0.0.1',
        port: 9999,
        proxy: {
            '/rest': {
                target: 'http://23.88.104.99:8888',
                //target: 'http://127.0.0.1:8888',
                secure: true
            }
        }
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css/i,
                loader: extractLESS.extract(['css'])
            },
            {
                test: /\.less$/i,
                loader: extractLESS.extract(['css', 'less'])
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url?limit=8192&name=assets/images/[name]-[hash:8].[ext]'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'assets/fonts/[name]-[hash:8].[ext]'
                }
            }
        ]

    },
    plugins: [
        extractLESS,
        new HtmlwebpackPlugin({
            title: 'zw react',
            filename: 'index.html',
            template: 'app/index.html',
            /*minify: {
             removeComments: true,    //移除HTML中的注释
             collapseWhitespace: true    //删除空白符与换行符
             },*/
            files: {
                //"css": ["css/style.css"],
                //"js": ["js/bundle.js"],
                /*"chunks": {
                 "head": {
                 //"entry": "head_bundle.js",
                 "css": ["css/style.css"]
                 },
                 "main": {
                 //"entry": "main_bundle.js",
                 "css": []
                 }
                 }*/
            },
            showErrors: true,
            inject: true,
            hash: true
        }),
        /*new webpack.optimize.UglifyJsPlugin({    //压缩代码
            compress: {
                warnings: false
            },
            output: {
                comments: false  // remove all comments
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
         })*/

    ]
};

deps.forEach(function (dep) {
    var depPath = path.resolve(node_modules_dir, dep.url);
    config.resolve.alias[dep.url.split(path.sep)[0]] = depPath;
    if (dep.noParse) config.module.noParse.push(depPath);
});
//console.dir(config);

module.exports = config;

