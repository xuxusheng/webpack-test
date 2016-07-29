# webpack-test
webpack学习使用

Webpack傻瓜式指南（一）

https://zhuanlan.zhihu.com/p/20367175

### multiple-entries

应用不可能都是SPA，不可能只生成一个html文件，如果想生成多个html页面怎么玩？其实也很简单。

现在的需求是这样的，有两个页面，一个叫index.html，它需要引用 vendors.js 和 app.js 这两个文件。

还有一个 mobile.html 页面，它要引用 vendor.js 和 mobile.js 这两个文件。


原来我们是没有模版文件的，原来利用 HtmlWebpackPlugin 的默认模版。谁想到这伟大的插件还可以自定义模版。所以新建一个专门放模版的文件夹 templates，在里面加两个模版文件 index.html 和 mobile.html

