// 1. 执行构造函数
// 2. 当函数返回值类型为对象时，则返回该对象
//    当函数返回值类型不为对象时，返回该构造函数的实例化对象


// Object.create()
function _new(fn, ...rest) {
    // 基于fn的prototype构建对象的原型
    const thisObj = Object.create(fn.prototype);
    // 将thisObj作为fn的this，继承其属性，并获取返回结果为result
    const result = fn.apply(thisObj, rest);
    // 根据result对象的类型决定返回结果
    return typeof result === 'object'?result:thisObj;
}


// 测试是否正确
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("erya", 21);
const person2 = _new(Person,"erya", 21)
console.log(person1,person2)
