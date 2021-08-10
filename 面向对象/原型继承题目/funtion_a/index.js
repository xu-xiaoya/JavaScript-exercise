function A() {
}
function B() {
    // 构函数内部return一个引用类型的对象，整个构造函数失效，返回这个引用类型的对象。
    return new A()
}
A.prototype = new A();
B.prototype = new B();
var a = new A();
var b = new B();
console.log(a.__proto__=== B.__proto__)