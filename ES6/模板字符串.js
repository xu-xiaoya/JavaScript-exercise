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



var title = 'Apple MacBook Air';
var os = 'MacOS';
var memory = '16G';
var isOnsale = 1;
console.log(`
  商品名称：${title}
  操作系统：${os}
  内存大小：${memory}
  是否在售：${isOnsale === 1 ? '是' : '否'}
`);


//练习：声明变量保存一条员工的数据，格式为对象，包含的属性有编号，姓名，性别(1/0)，工资；最后打印出以下格式
var emp = {
    eid: 2,
    ename: 'erya',
    sex: 0,
    salary: 50000
  };
  console.log(`
    编号：${emp.eid}
    姓名：${emp.ename}
    性别：${emp.sex ? '男' : '女'}
    工资：${emp.salary.toFixed(2)}元
  `);