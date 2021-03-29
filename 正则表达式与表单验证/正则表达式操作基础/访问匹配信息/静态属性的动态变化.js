var s = "JavaScript,not Javascript";

var r = /Scrip(t)/gi; 			// 第一次定义的匹配模式
var a = r.exec(s); 				// 执行第一次匹配
alert(RegExp.$_); 				// 返回字符串"JavaScript,not Javascript"
alert(RegExp["$`"]);			// 返回字符串"Java"
alert(RegExp["$'"]);			// 返回字符串",not Javascript"
alert(RegExp["$&"]);			// 返回字符串"Script"
alert(RegExp["$+"]);			// 返回字符串"t"


var r = /Jav(a)/gi; 			// 第二次定义的匹配模式
var a = r.exec(s); 				// 执行第二次匹配
alert(RegExp.$_); 				// 返回字符串"JavaScript,not Javascript"
alert(RegExp["$`"]);			// 返回空字符串
alert(RegExp["$'"]); 			// 返回字符串"Script,not Javascript"
alert(RegExp["$&"]);			// 返回字符串"Java"
alert(RegExp["$+"]);			// 返回字符串"a"
