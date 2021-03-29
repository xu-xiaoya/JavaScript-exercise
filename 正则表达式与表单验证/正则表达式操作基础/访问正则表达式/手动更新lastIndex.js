var s = "0123456789";
var r = /\d/g;      //匹配单个数字
r.lastIndex = 5;    //指定匹配起始位置为5，即从第6个字符开始匹配
var a = r.exec(s);  //执行匹配
alert(a);           //5