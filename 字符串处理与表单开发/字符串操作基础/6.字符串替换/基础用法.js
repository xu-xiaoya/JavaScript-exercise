//【示例1】
var s = "http:// www.mysite.cn/index.html";
var b = s.replace( /html/, "htm" ); 	// 把字符串html替换为htm
alert( b ); 			// 返回字符串"http:// www.mysite.cn/index.htm"

var b = s.replace("html", "htm" ); 	// 把字符串html替换为htm



//【示例2】
var s = "http:// www.mysite.cn/index.html";
function f( x ){ 						// 替换文本函数
  return x.substring( x.lastIndexOf(".")+1, x.length - 1 ) // 获取扩展名部分字符串
}
var b = s.replace( /(html)/, f(s)); 	// 调用函数指定替换文本操作
alert( b ); 			// 返回字符串"http:// www.mysite.cn/index.htm"