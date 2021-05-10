//parseFloat()将字符串转为浮点型，其他转换为NaN
var p1 = parseFloat('5.18');//5.18

var p2 = parseFloat('7a');//7
var p3 = parseFloat('a4.13');//NaN

var p4 = parseFloat(5);//5

console.log(p1, p2, p3, p4);