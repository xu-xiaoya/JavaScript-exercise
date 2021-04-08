/*
非引用型分组不会创建反向引用
适用：必须使用子表达式，但是又不希望存储无用的匹配信息而浪费系统资源，或者希望提高匹配速度

创建方法：在左括号的后面别加上一个问号和冒号
*/
var s1 = "abc";
var s2 = "123";
//(?:非引用型分组
var r = /(?:\w*?)|(?:\d*?)/;	
var a = r.test(s1); 			// 返回true
var b = r.test(s2); 			// 返回true

alert(RegExp.$1); //返回空""，非引用型不存储文本