var s = "JavaScript,not Javascript";

var r = /(Java)Script/gi;
var a = r.exec(s);		 		// 执行匹配操作

//input实际上存储的是被执行匹配的字符串，即整个字符串"JavaScript,not Javascript"
alert(RegExp.input); 		

//leftContext存储的是第一次匹配之前（左边）的所有内容，这里左侧无内容
alert(RegExp.leftContext);      

//rightContext存储的是第一次匹配之后（右边）的所有内容，返回",not Javascript"
alert(RegExp.rightContext); 	

//lastMatch包含的是第一次匹配的子字符串，即"JavaScript "
alert(RegExp.lastMatch); 	

//lastParen为最后一个子模式匹配出的字符串，即"Java"
alert(RegExp.lastParen); 	