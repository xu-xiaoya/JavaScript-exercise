function f(x,y) {
    function e(a,b) {
        return a*b;
    }
    return e(3,6)+y;//24,内部函数参与表达式运算有效
}
console.log(f(3,6));