// 函数作为数组元索枚举出来执行
function fun(a,b,c,d,e) {
    console.log(this.length);
}
function fun1(a,b) {
    arguments[0](1,2,3,4,5);
}
fun1(fun,1,2,3,4,5);//6