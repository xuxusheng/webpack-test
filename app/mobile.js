/*
*  首先新建一个 mobile.js 的入口文件，比 app.js 更简单一些
* */

import './css/main.scss'
import $ from 'jquery'
import 'imports?jQuery=jquery!./plugin/plugin'
import info from './data/info.yaml'

$(document).ready(function() {
    let app = document.createElement('div')
    app.innerHTML = '<h1>Hello world, I am mobile.js!</h1>'
    document.body.appendChild(app)
    $('h1').greenify()
    console.log(info)
})