//反引号(`)标识，它可以当作普通字符串使用，
//也可以用来定义多行字符串，或者在字符串中嵌入变量。

// 普通字符串
console.log(`In JavaScript '\n' is a line-feed.`)
 
// 多行字符串
console.log(`In JavaScript this is
not legal.`)

var name = "ERYA", time = "tomorrow";
console.log(`
Hello ${name}, 
how are you ${time}?
`);

//1.可以写一切有返回值的js表达式：
//  变量 运算 三目 函数调用 创建对象 调用方法 访问数组元素
//2.不能写程序结构
//  if elseif else for(){} while(){} do{}while()

var title = 'Apple MacBook Air';
var isOnsale = 1;
var week = ["日","一","二","三","四","五","六"];
var emp = {
  sex: 0,
  salary: 50000
};
console.log(`
  商品名称：${title}
  是否在售：${isOnsale === 1 ? '是' : '否'}
  日期：${week[new Date().getDay()]}
  性别：${emp.sex ? '男' : '女'}
  工资：${emp.salary.toFixed(2)}元
`);
