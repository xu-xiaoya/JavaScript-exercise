//匿名函数比较有用
//argumentts.callee获取匿名函数
function f(x,y,z) {
    var a = arguments.length;//函数实参个数
    var b = arguments.callee.length;//Function对象的length返回函数形参个数
    if (a != b) {
        throw new Error("传递的参数不匹配");
    } else {
        return x+y+z;
    }
}