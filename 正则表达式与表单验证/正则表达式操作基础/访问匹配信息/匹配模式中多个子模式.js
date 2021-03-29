var r = /(Java)(Script)/gi;
var a = r.exec(s); 				// 执行匹配操作

//lastParen显示最后一个子模式所匹配的字符。
alert(RegExp.lastParen); 		// 返回字符串"Script"，而不再是"Java"



//上述可以设计：
var s = "JavaScript,not Javascript";
var r = /(Java)(Script)/gi;
var a = r.exec(s);

//$_:input
alert(RegExp.$_); 				// 返回字符串"JavaScript,not Javascript"

//$`:leftContext
alert(RegExp["$`"]);			// 返回空字符串

//$':rightContext
alert(RegExp["$'"]);			// 返回字符串",not Javascript"

//$&:lastMatch
alert(RegExp["$&"]);			// 返回字符串"JavaScript "

//$+:lastParen
alert(RegExp["$+"]);			// 返回字符串"Java"