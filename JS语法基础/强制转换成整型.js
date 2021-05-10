//parseInt将小数和字符串转为整型，其他的转换为NaN(左→右，看开头是否有数字)
var p1 = parseInt(8.9);//8

var p2 = parseInt('3.14');//3
var p3 = parseInt('6.18a');//6
var p4 = parseInt('a6.18');//NaN

var p5 = parseInt(true);//NaN

console.log(p1, p2, p3, p4, p5);