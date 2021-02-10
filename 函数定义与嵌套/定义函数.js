//一、声明函数function
function f(a, b) {
    return a+b;
}

/*二、构造函数Function
var funName = new Function(p1,p2,body); 
Function的参数都是字符串，body语句之间分号进行分隔
*/
var f = Function("a","b","return a+b");

//三、函数直接量（匿名函数=没有函数名）
var f = function(a,b) {
    return a+b;
}
alert(f(1,2));

//函数作为一个运算元，一体化
alert(
    (function(a,b) {
        return a+b;
    })(1,2)
);//3
