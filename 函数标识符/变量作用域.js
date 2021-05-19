/*
function fn() {
    var n = 5;
}
fn();
console.log(n);//报错，全局无法访问局部变量
*/


/*在js中的全局作用域下，所有变量和函数的调用对象都是window对象！！*/
var w = 1;
console.log(window.w);//1

//示例一
var m = 5;  //函数外声明变量，标准全局变量
function fn() {
    //函数内不加var声明的变量是全局变量
    n = 5;
}
fn();//直接调用函数fn()，函数的执行作用域为全局域，故为window对象
console.log(n);

//示例二
function fun() {
    var m1 = m2 = m3 = 6;//从右向左赋值
    /*
    m3 = 6
    m2 = m3
    var m1 = m2
    */
}
fun();

console.log(m3);//6
console.log(m2);//6
console.log(m1);//m1是局部变量，报错


//在程序执行前，会将var声明的变量提升到所在作用域的最前边，只提升声明，不提升赋值
//var a
console.log(a);//undefined
var a = 1;//有var才提升
console.log(a);//1


function fn() {
    //var b 提升到整个函数作用域的最前边
    console.log(b);//undefined
    var b = 2;
    console.log(b);//2
}
fn();


var c = 3;
function fun() {
    //var c;
    console.log(c); //undefined
    var c = 5;      //给当前作用域下的c赋值给5
}
fun();
console.log(c); //3