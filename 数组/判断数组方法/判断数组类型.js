//不正确的方法: typeof
var n=10, str="hello", b=true, nu=null, un;
var f=function(){};
var obj1={}, obj2=[1,2,3], obj3=new Date();
console.log(
    // 原始类型
    typeof(n),      //number
    typeof(str),    //string
    typeof(b),      //boolean
    typeof(nu),     //object
    typeof(un),     //undefined
    // 判断函数 
    typeof(f),      //function

    // 不能判断引用类型的具体类型
    typeof(obj1),   //object
    typeof(obj2),   //object
    typeof(obj3)    //object
);

// 一、判断爹
// 法一：.__proto__获得对象的爹，再和数组的爹比较
console.log(
    obj1.__proto__ == Array.prototype,
    obj2.__proto__ == Array.prototype,
    obj3.__proto__ == Array.prototype
)
//法二：_proto_可能被浏览器禁用，使用等效的函数来完成Lproto__的任务:0bject.getPrototype0f(child)
console.log(
    Object.getPrototypeOf(obj1) == Array.prototype,
    Object.getPrototypeOf(obj2) == Array.prototype,
    Object.getPrototypeOf(obj3) == Array.prototype
)
// 法三：father.isPrototypeOf(child)
console.log(
    Array.prototype.isPrototypeOf(obj1),
    Array.prototype.isPrototypeOf(obj2),
    Array.prototype.isPrototypeOf(obj3)
)


// 二、判断妈妈
// 法四：用父级原型对象中的constructor属性
console.log(
    obj1.constructor == Array,
    obj2.constructor == Array,
    obj3.constructor == Array,
)
// 法五：child instanceof 妈妈
console.log(
    obj1 instanceof Array,
    obj2 instanceof Array,
    obj3 instanceof Array,
)


// 三、输出对象中DNA：内部隐藏属性class
// console.log(
//     obj1.class,
//     obj2.class,
//     obj3.class,
// )

// call可以让任何一个对象抢到原来不属于它的任一个函数
console.log(
    Object.prototype.toString.call(obj1),
    Object.prototype.toString.call(obj2)==='[object Array]',
    Object.prototype.toString.call(obj3)
)


// 四、ES5 Array.isArray(obj)
console.log(
   Array.isArray(obj1),
   Array.isArray(obj2),
   Array.isArray(obj3)
)