// 简单模拟zepto的原型
(function (window) {
    //1.声明一个zepto对象
    var zepto={}
    //2.声明$,返回zepto.init方法调用
    var $=function (selector) {
        return zepto.init(selector)
    }
    //3.定义 zepto.init 方法将dom，selector 传入zepto.Z方法
    zepto.init=function (selector) {
        var slice=Array.prototype.slice;
        var dom=slice.call(document.querySelectorAll(selector))
        return zepto.Z(dom,selector)
    }
    //4.zepto.Z 方法 返回Z的实例
    zepto.Z=function (dom,selector) {
        return new Z(dom,selector)
    }
    //5.Z构造函数
    function Z(dom,selector) {
        var i=0,len=dom?dom.length:0;
        for(;i<len;i++){
            this[i]=dom[i]
        }
        this.length=len;
        this.selector=selector||''
    }
    //6.定义$.fn
    $.fn={
        css:function (key,value) {
            console.log('css')
        },
        html:function (newValue) {
            return 'html'
        }
    }
    //7.$.fn 赋值给 Z.prototype
    Z.prototype=$.fn;

    window.$=$
    //8.将 $ 赋值给全局
})(window)