// 简单模拟jq原型
(function (window) {
    //1.定义jQuery,返回jQuery.fn.init实例
    var jQuery = function (selector) {
        return new jQuery.fn.init(selector)
    }
    //4.jQuery.fn 定义属性，方法
        jQuery.fn={
           css:function (key,value) {
               console.log('css')
           },
            html:function (newValue) {
                return 'html'
            }
        }
    //2.init方法，通过选择器查找dom，将dom的每一项、length，selector赋值给实例，
    var init = jQuery.fn.init = function (selector) {
        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(selector))
        var i = 0, len = dom ? dom.length : 0;
        for (; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len;
        this.selectot = selector || ''
    }
    //3.将init的原型指向jQuery.fn
    jQuery.fn.init.prototype=jQuery.fn;
    //5.给全局提供$
    window.$=jQuery
})(window)