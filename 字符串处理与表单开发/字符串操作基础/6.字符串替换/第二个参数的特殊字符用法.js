//【示例3】在replace()方法中约定了一个特殊的字符（$），
//这个美元符号如果附加一个序号就表示对正则表达式中匹配的子表达式存储的字符串引用。
var s = "javascript";
var b = s.replace( /(java)(script)/, "$2-$1");		// 交换位置
alert( b ); 								// 返回字符串"script-java"


//【示例4】重复字符串。
var s = "javascript";
var b = s.replace( /.*/, "$&$&");// $&：与 regexp 相匹配的子串。返回字符串" javascriptjavascript "


//【示例5】对匹配文本左侧的文本完全引用。
var s = "javascript";
var b = s.replace( /script/, "$& != $`");//$`：位于匹配子串左侧的文本。 返回字符串"javascript != java"


//【示例6】对匹配文本右侧的文本完全引用。
var s = "javascript";
var b = s.replace( /java/, "$&$' is "); //$`：位于匹配子串左侧的文本。返回字符串"javascript is script"