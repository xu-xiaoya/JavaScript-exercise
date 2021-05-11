var a = "小菜鸡'+'是谁";//小菜鸡'+'是谁
var a = '小菜鸡"+"是谁';//小菜鸡"+"是谁
var a = '小菜鸡"'+'"是谁';//小菜鸡""是谁

//var _html = "<div class = "content">小菜鸡</div>";//报错

var data = {name:"小明", age:"18"};
var _html1 = `<div class= 'content'>我的名字叫${data.name},我今年的年龄是${data.age}</div>`;
console.log(_html1);