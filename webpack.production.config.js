'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var path = require('path')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'app')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')
// template 的文件夹路径
const TEM_PATH = path.resolve(APP_PATH, 'templates')

module.exports = (() => {
    let config = {}

    /*
    *  这样我们 build 出来的只有一个 bundle.js，如果第三方库很多的话，会造成这个文件非常大，减慢加载速度，现在我们要把第三方库和我们app本身的代码分成两个文件。
    * */
    // config.entry = APP_PATH

    // config.entry = {
    //     app: path.resolve(APP_PATH, 'index.js'),
    //
    //     // 添加要打包在 vendors 里面的库
    //     vendors: ['jquery', 'moment']
    // }

    config.entry = {
        // 三个入口文件，app，mobile 和 vendors
        app: path.resolve(APP_PATH, 'index.js'),
        mobile: path.resolve(APP_PATH, 'mobile.js'),
        vendors: ['jquery', 'moment']
    }

    // config.output = {
    //     filename: 'bundle.js',
    //     path: BUILD_PATH
    // }

    config.output = {
        path: BUILD_PATH,

        // 注意我们修改了 bundle.js，用[name]来代替，它会根据entry的入口文件名称生成多个js文件，这里就是（app.js, mobile.js 和 vendors.js)

        // filename: '[name].js'

        // 生成 hash 名称的 script 来防止缓存
        // 经典问题，代码更新了，但是浏览器缓存，有时候就傻了。怎么解决？换名字呗，可以直接在后面加参数，也可以直接换掉名字。webpack 提供给了我们非常简单的方法，基于文件的md5，只要像下面这样：
        // 记上 [hash] 这个参数
        filename: '[name].[hash].js'

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

/*        // 我们可以自己在 build 文件夹里面手动建一个index.html文件夹，然后再把合并以后的js引用在里面，但是这样有些麻烦，所以我们这里安装一个plugin，可以自动快速的帮我们生成HTML
        new HtmlWebpackPlugin({
            title: 'hahahahaha'
        }),*/

        // 创建了两个 HtmlWebpackPlugin 的实例，生成两个页面
        new HtmlWebpackPlugin({
            title: 'hello word app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            // chunks 这个参数告诉插件要引用 entry 里面的哪几个入口
            chunks: ['app', 'vendors'],
            // 要把 script 插入到标签里
            inject: 'body'
        }),

        new HtmlWebpackPlugin({
            title: 'hello Mobile app',
            template: path.resolve(TEM_PATH, 'mobile.html'),
            filename: 'mobile.html',
            chunks: ['mobile', 'vendors'],
            inject: 'body'
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