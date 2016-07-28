// require('./main.css')
import './main.css'
import './main.scss'

import * as sub from './sub'

import $ from 'jquery'
import moment from 'moment'

// let app = document.createElement('div')
// app.innerHTML = '<h1>我是main.js中生成的</h1>'
// app.appendChild(sub.generateText())
// document.body.appendChild(app)
//
// $('body').append('<p>look at me! now is ' + moment().format() + '</p>');


let app = document.createElement('div')
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
    $('body').append('<p>promise result is ' + number + 'now is' + moment().format());
})
app.innerHTML = '<h1>我是main.js生成的!</h1>'
document.body.appendChild(app);
app.appendChild(sub.generateText())