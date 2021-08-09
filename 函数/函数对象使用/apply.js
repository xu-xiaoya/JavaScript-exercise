/*
传递给参数的方式：数组形式
apply()会先打散数组为多个值，再传值
*/
// 要调用的函数.call(替换this的对象，数组)，立刻执行
var erya = {ename:'erya'};
function cal(money, extra1, extra2) {
    console.log(`${this.ename}的工资为${money+extra1+extra2}`);
}
var arr1 = [10000,100,2000];
cal.apply(erya, arr1);



function f(x,y) {
    return x+y;
}
function o(a,b) {   
    return a*b;
}
console.log(f.apply(o,[3,4]));    //7


// 求最大值，传a
var a = [1,4,5,2,9];
Math.max.apply(null,a);