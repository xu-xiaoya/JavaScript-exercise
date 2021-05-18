//字符串根据分隔符转换为数组

var s = "1==2==3==4==5";
var a = s.split("==");//将==作为分隔的符号
console.log("split “==”：" + a);
console.log("typeof 类型：" + typeof a +'<br>');//typeof对象和数组都为Object
console.log("constructor Array： ");
console.log(a.constructor == Array)//constructor可区分数组和对象