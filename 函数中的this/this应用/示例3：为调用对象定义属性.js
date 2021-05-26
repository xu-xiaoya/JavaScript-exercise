var x = 1;          //声明window全局对象x = 1
function f() {      
    this.x = 2;     //声明当前对象的属性x为2
}

console.log(x);   //1

f();        //直接调用函数f，this将会指向window => this.x = window.x，该属性与全局对象x同名，故覆盖。
console.log(x);   //2



/*  在全局作用域下，所有变量和函数的调用对象都是window！！
    故上述程序可如下设计：
*/
/*
window.x = 1;
function f() {
    this.x = 2;
}
window.f();
console.log(window.x);    //2
*/