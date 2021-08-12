//表示参数集合
function f() {
    arguments.length = 2;//修改length值=改变函数实参个数
    for (var i = 0; i < arguments.length; i++) {
        //arguments[i] = i;   修改实参值
        alert(arguments[i]);//显示指定下标的实参值
    }
}
f(3,3,6);//只有3 3