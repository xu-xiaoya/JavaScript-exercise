//一、全局作用域
//1、window对象是全局对象，所有的全局变量都被视为该对象的属性
var a = "window.a";
function f() {
    alert(a);
}
alert(window.a); //等价alert(a);引用window对象的属性a，返回"window.a"
alert(window.f());//调用window对象的方法f(),返回"window.a"

//2、window对象与全局对象区别：window对象属性可以删除，全局变量不能通过delete删除
/* 使用var声明全局变量，window会为这个属性定义一个"configurable的特性，且值为false，故不能被delete删除*/
var a = "A";
window.b = "window.b";
c = "c";
alert(delete window.a);//false，删除失败
alert(delete window.b);//true，删除成功
alert(delete window.c);//true
