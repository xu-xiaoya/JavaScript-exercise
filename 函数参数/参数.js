function f(a, b) {//a b形参
    return a+b;
}
var x = 1, y = 2;//x y实参
alert(f(x,y));

alert(f.length);//获取形参个数

//形参个数 > 实参个数:多出的形参undefined
(function(a,b) {
    alert(typeof a);//number
    alert(typeof b);//undefined
})(1);

//形参个数 < 实参个数：多出的实参忽略
(function(a,b) {
    alert(a);//1
    alert(b);//2
})(1,2,3,4);

//私有变量优先级 > 形参，二者都为局部变量
function f(a) {
    var a = 0;//私有变量a
    return a;
}
alert(f(5));//返回值0