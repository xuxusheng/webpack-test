/**
 * Created by xusheng-antiy on 2016/7/28.
 */
// const sub = require('./sub')
require('./main.css')
import * as sub from './sub'
// require('./main.scss')

let app = document.createElement('div')
app.innerHTML = '我是index.js中生成的!'
app.appendChild(sub.generateText())

document.body.appendChild(app)
