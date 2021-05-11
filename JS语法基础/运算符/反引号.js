//``反引号，保留格式
var data = {name:"小明", age:"18"};
var _html1 = `<div class= 'content'>我的名字叫${data.name},
我今年的年龄是${data.age}</div>`;
console.log(_html1);