/*1.声明提前
函数function(){}整体提前，var 变量=xxx仅var变量提前，=xxx留在原地

var getName;
function getName() {
    console.log(5);
}
*/

// 2.任何函数都是普通的对象，也可添加自己的属性。添加的属性和函数体内的部分,毫无关系。
// 3.任何函数都可以当做构造函数被new调用,且任何函数都有原型对象Prototype属性,只不过,大部分函数不是标准的构造函数内容而已。

function Foo(){
    getName = function() {
        console.log (1);
    };
    return this;
}
Foo.getName = function() {
    console.log(2);
}
Foo.prototype.getName = function () {
    console.log(3);
}

// 给全局getName赋值
var getName = function() {
    console.log(4);
}
function getName() {
    console.log(5);
}

// 调用函数对象的getName方法,2
Foo.getName();
// 全局getName，4
getName();
// this->window,window.getName()， 1
Foo().getName();
getName();  //1

// new 函数() 看括号前的内容，就是要调用的函数
// new的是“Foo的getName方法”
new Foo.getName();  //2
// new的是“Foo”，再调用getName
new Foo().getName(); //3

new new Foo().getName();//3
    