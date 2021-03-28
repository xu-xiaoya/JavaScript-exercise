var r = new RegExp("a");    //构造最简单的正则表达式
var s = "javascript!=JAVA"; //定义字符串直接量
var a = a.match(r);         //调用正则表达式执行匹配操作，返回匹配的数组
alert(a);                   //返回数组["a"]
alert(a.index);             //返回1