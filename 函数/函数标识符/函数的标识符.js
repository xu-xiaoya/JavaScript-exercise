/*
优先级：this > 局部变量 > 形参 > arguments > 函数名
*/

//局部变量 > 形参
function f(x) {
    var x = 10;//局部变量已赋值
    alert(x);
}
f(5); //传递参数值为5，返回值为10
 