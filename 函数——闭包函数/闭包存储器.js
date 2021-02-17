function f(a,b) {
    return function() {//返回闭包函数
        a(b);
    }
}

//一、setTimeout用于有计划地执行一个函数，第一个参数要执行的函数，第二个参数以ms表示的执行间隔
var c = f(alert,"hello,world");    
var d = setTimeout(c,1000);//把闭包作为参数进行传递


//二、向window对象的onload属性传递以一个闭包函数，实现动态调用
var c = f(alert,"Hello,World");
window.onload = c;