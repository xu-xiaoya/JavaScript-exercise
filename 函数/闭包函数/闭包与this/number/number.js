var number = 2;
var obj = {
    number: 4,
    // 匿名函数自调，立即调用
    fn1: (function() {
        // var number;  //声明提前

        // 匿名函数中this指向window，window.number*2 =>全局number=4
        this.number *= 2;
        // 局部变量number，NaN
        number *= 2;
        // 声明提前
        var number = 3;
        return function() {
            this.number *= 2;
            number *= 3;
            console.log(number);
        }
    })()
}


var fn1 = obj.fn1;
console.log(number);
fn1();
obj.fn1();
console.log(number);
console.log(obj.number);