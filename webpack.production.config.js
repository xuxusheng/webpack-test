'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var path = require('path')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'app')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = (() => {
    let config = {}

    /*
    *  这样我们 build 出来的只有一个 bundle.js，如果第三方库很多的话，会造成这个文件非常大，减慢加载速度，现在我们要把第三方库和我们app本身的代码分成两个文件。
    * */
    // config.entry = APP_PATH

    config.entry = {
        app: path.resolve(APP_PATH, 'index.js'),

        // 添加要打包在 vendors 里面的库
        vendors: ['jquery', 'moment']
    }

    config.output = {
        filename: 'bundle.js',
        path: BUILD_PATH
    }

    config.module = {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            include: APP_PATH
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
            include: APP_PATH
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }],

        preLoaders: [{
            test: /\.js$/,
            include: APP_PATH,
            loader: 'jshint'
        }]
    }

    config.jshint = {
        esversion: 6,

        // Allow global "use strict" (also enables 'strict')
        globalstrict: false,

        // Tolerate Automatic Semicolon Insertion (no semicolon)
        asi: true
    }

    config.plugins = [

        // 我们可以自己在 build 文件夹里面手动建一个index.html文件夹，然后再把合并以后的js引用在里面，但是这样有些麻烦，所以我们这里安装一个plugin，可以自动快速的帮我们生成HTML
        new HtmlWebpackPlugin({
            title: 'hahahahaha'
        }),

        // 这个使用 uglifyJs 压缩js代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            minimize: true
        }),

        // 把入口文件里面的数组打包成 vendors.js
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]

    return config
})()