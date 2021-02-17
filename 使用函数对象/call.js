/*
通过call方法把函数f绑定到对象o身上，变为其一个方法
传递给参数的方式：以多个值的形式
*/
function f(x,y) {
    return x+y;
}
function o(a,b) {   //一个函数结构的伪对象
    return a*b;
}
o.m = f;            //为对象o定义一个方法m，该方法调用函数f
alert(o.m(3,4));    //7,调用对象o的方法m
delete o.m;         //删除对象o的方法m