/*原型继承：通过复制已经存在的原型对象来实现继承关系的

优点：结构简练，不需要每次构造都调用父类的构造函数

缺点：
①每个类型只有一个原型，所以他不直接支持多重继承
②不能很好的支持多参数或者动态参数的父类
*/

function A(x) {     //A类
    this.x1 = x;       //本地属性及方法
    this.get1 = function() {
        return this.x1;
    }
}
function B(x) {     //B类
    this.x2 = x;       //本地属性及方法
    this.get2 = function() {
        return this.x2 + this.x2;
    };
}
B.prototype = new A(1);     //原型对象继承A的实例，继承x1，get1

function C(x) {     //C类
    this.x3 = x;       //本地属性及方法
    this.get3 = function() {
        return this.x1*this.x2*this.x3;
    };
}
C.prototype = new B(2);//继承x1，x2，以及get1、get2

var b = new B(2);
var c = new C(3);

console.log(b.x1, b.x2);//在实例对象b中调用A的属性x1：1, x2：2
console.log(c.x1,c.x2,c.x3);//在实例对象c中调用A的属性x1：1，x2：2，x3:3


console.log(c.get2());//在实例对象c中调用B的方法get2()，4
console.log(c.get3());//在实例对象c中调用C的方法get3()，6