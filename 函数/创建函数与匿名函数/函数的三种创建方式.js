// 1) 声明方式 function
// 缺陷：声明提前，打乱执行顺序
function fun(a, b) {
	return a+b;
}

// 2) 赋值方式 
// 优点：不会声明提前，保持程序原有顺序
// 今后只要定义函数，优先选择赋值方式创建函数
var f = function(a,b) {
    return a+b;
}
alert(f(1,2));


// 3）new创建——几乎不用
// Function的参数都是字符串，body语句之间分号进行分隔
var f = Function("a", "b", "a=a+b;return a");

// 揭示原理：
// a.函数也是一个引用类型的对象
// b.函数名是一个普通的变量
// c.函数名变量通过对象的地址值，引用着函数对象

// 所有function底层都是new Function(){…}
// new出来的都是复杂类型，复杂类型都无权进入变量本地