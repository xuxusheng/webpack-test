/**
 * Created by xusheng-antiy on 2016/7/28.
 */
'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')

var path = require('path')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'app')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = (() => {
    let config = {}

    config.entry = APP_PATH

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
            }
        },{
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    }

    config.plugins = [
        new HtmlWebpackPlugin({
            title: 'hahahahaha'
        })
    ]

    config.devServer = {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }

    return config
})()