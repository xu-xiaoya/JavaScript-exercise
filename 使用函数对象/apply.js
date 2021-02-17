/*
传递给参数的方式：数组形式
*/
function f(x,y) {
    return x+y;
}
function o(a,b) {   
    return a*b;
}
alert(f.apply(o,[3,4]));    //7