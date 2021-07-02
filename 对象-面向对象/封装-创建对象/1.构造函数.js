//定义构造函数描述统一结构
function Student(sname,sage) {
    this.sname = sname;
    this.sage = sage;
    // 不应该在构造函数中定义方法，具体参考继承-原型
    this.intr = function() {
        console.log(`I am  ${this.sname}, I am ${this.sage}`);
    }
}

// new做的4件事
// i.   创建一个新的空对象等待
// ii.  让新创建的对象自动继承构造函数的原型对象
// iii. 调用构造函数
//        ①将构造函数中的this->new刚创建的对象
//        ②在构造函数内通过强行赋值方式，为新对象添加新规定的属性和方法
// iv.  返回新对象的地址，保存在=左边的变量里
var erya1 = new Student("erya1", 11);
var erya2 = new Student("erya2", 12);
console.log(erya1);
console.log(erya2);