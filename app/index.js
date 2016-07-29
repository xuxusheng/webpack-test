// require('./main.css')
import './css/main.css'
import './css/main.scss'

import $ from 'jquery'
import moment from 'moment'

import * as sub from './js/sub'
import ajax from './js/ajax'

// 注意这种写法，我们把jQuery这个变量直接插入到plugin.js里面去了
// 相当于在这个文件的开始添加了 var jQuery = require('jquery')
import 'imports?jQuery=jquery!./plugin/plugin'



const myPromise = Promise.resolve(42)
myPromise.then((number) => {
    $('body').append('<p>promise result is ' + number + 'now is' + moment().format())

    // call our jquery plugin
    $('p').greenify()
})


let app = document.createElement('div')

$(app).attr('class', 'xusheng')
app.innerHTML = '<h1>我是main.js生成的!</h1>'
app.appendChild(sub.generateText())

document.body.appendChild(app)

ajax()
