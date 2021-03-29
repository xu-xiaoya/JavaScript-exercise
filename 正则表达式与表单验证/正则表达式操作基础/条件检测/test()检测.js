/*
RegExpObject.test(string)
string表示要检测的字符串，如果string中有与RegExpObject匹配的文本返回true，否则false

tip：等价于调用exec(),如果exec()不返回null，则test返回true()
*/

var s = "javascript";
var r = /\w/g; 						// 匹配字符
var b = r.test(s); 					// 返回true

var r = /javascript/g;
var b = r.test(s); 					// 返回true

var r = /\d/g; 						// 匹配数字
var b = r.test(s); 					// 返回false