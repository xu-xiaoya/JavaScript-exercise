var s = "javascript";
var i = s.indexOf("a",-10);
alert(i); 							// 返回值为1，即字符串中第二个字符

//返回第一个字符w的下标位置
var s = "http:// www.mysite.cn/";
var a = s.indexOf( "www" ); 		// 返回值为7，即第一个字符w的下标位置

//查询URL字符串中两个点号字符的下标位置
var s = "http:// www.mysite.cn/";
var b = s.indexOf( "." ); 			// 返回值为10，即第一个字符.的下标位置
var e = s.indexOf( ".", b + 1 ); 	// 返回值为15，即第一个字符.的下标位置

//从后往前查询最后一个点号字符的下标位置
var s = "http:// www.mysite.cn/index.html";
var n = s.lastIndexOf( "." ); 		// 返回值为24，即第三个字符.的下标位置

var s = "http:// www.mysite.cn/index.html";
var n = s.lastIndexOf( "." , 11 ); 	// 返回值为10，而不是15

var s = "http:// www.mysite.cn/index.html";
var n = s.lastIndexOf( "www" ); 			// 返回值为7，而不是10
