/*
一、函数节流：
时间轴上控制函数的执行次数。
在 一定时间 之内，限制 一个动作 只 执行一次 。

目的：有一些事件或者函数，会被频繁地触发（短时间按内多次触发），如，onresize，scroll，mousemove ,mousehover 等，
如果在这些函数内部执行了其他函数，尤其是执行了操作 DOM 的函数（浏览器操作 DOM 是很耗费性能的），降低程序运行速度，甚至造成浏览器卡死、崩溃。

实现：使用定时器
*/

/*节流函数
 fn 事件中实际需要调用的函数
 interval    函数最短隔多长时间调用
*/
var throttle = function(fn , interval){
    var _self = fn ,     timer ,        //定时器
        isFirst = true;        //是否是第一次调用
    return function(){
        var args = arguments ,
            _this = this;
        if(isFirst){            //如果是第一次执行，不需要走定时器
            _self.apply(_this , args);
            return isFirst = false;     //false代表此后不是第一次调用
        }
        /*从第二次执行就要开始走定时器了*/
        if(timer)    return;            //如果定时器内的函数还未执行return
        timer = setTimeout(function(){        //定时函数
            clearTimeout(timer);    // 清除前一次的定时器
            timer = null;
            _self.apply(_this , args);
        } , interval || 100)
    }
}
//测试
window.onresize = throttle(function(){
    console.log(222);
} , 500);