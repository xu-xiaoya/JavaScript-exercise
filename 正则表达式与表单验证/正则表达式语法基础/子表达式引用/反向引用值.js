var s = "abcdefghijklmn";
var r = /(\w)(\w)(\w)/;
r.test(s);
alert(RegExp.$1); 			// 返回第1个子表达式匹配的字符a
alert(RegExp.$2); 			// 返回第2个子表达式匹配的字符b
alert(RegExp.$3); 			// 返回第3个子表达式匹配的字符c