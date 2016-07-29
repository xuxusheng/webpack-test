(function ($) {
    const shade = "blue"

    /*
    *  $.fn 是指 jquery 的命名空间，加上 fn 上的方法及属性，会对 jquery 每一个实例有效
    *  如扩展 $.fn.abc() 即是对 jquery 扩展了一个 abc 方法，那么后面你的每一个jquery示例都可以引用这个方法了
    *  你可以这个样子：$('#div').abc()
    * */

    $.fn.greenify = function() {
        this.css("color", shade)
        return this
    } 
})(jQuery)