//一、使用对象直接量{}创建对象  
/*
①属性名与属性值之间通过冒号进行分隔
②属性值：任意类型的数据， 属性名：js标识符或任意形式的字符串
③属性之间逗号分隔，最后一个属性末尾不需逗号！
*/
var o = {
    a : 1,      
    b : true,
    c : function() {        //属性值为函数，则该属性变为对象的方法
        return 1
    },
    d : {           //嵌套结构的对象
        f : 1
    }
}
alert(o.c());   //附加小括号读取属性值，即调用方法
alert(o.d.f);   //连续使用点号运算符读取内层对象的属性值

var o = {}  //空对象直接量 


//二、new 内置构造函数new
var 对象名=new Object(); //先创建空对象{}
var o = new Object();   //创建一个空对象
var o = new Array();    //创建一个空数组对象


//三、使用构造函数创建对象
function Student(sname,sage) {
    //构造函数内部通过this指代实例化对象
    //构造函数内可以通过点运算符声明本地成员
    this.sname = sname;
    this.sage = sage;
    this.intr = function() {
        console.log(`I am  ${this.sname}, I am ${this.sage}`);
    }
}
var erya = new Student("erya", 11);


//四、ES5-create()方法
/*  
Object.create(prototype,descriptors)
prototype：必需参数，用作原型的对象，可以为null
descriptors：可选参数，包含一个或多个属性描述符的js对象
*/
var father = {
    money:1000000000000,
    car:"infiniti"
}
var erya=Object.create(father,{
//defineProperties()添加自有属性
    phone:{
        value:"iPhone 13 Max",
        writable:true,
        enumerable:true,
        configurable:false
    },
    bao:{
        value:"LV",
        writable:true,
        enumerable:true,
        configurable:false
    }
});
console.log(erya);
console.log(erya.money, erya.car);