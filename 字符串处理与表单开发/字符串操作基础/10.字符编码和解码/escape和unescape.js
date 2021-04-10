/*escape() 方法能够把 ASCII 之外的所有字符转换为 %xx 或 %uxxxx（x表示十六进制的数字）的转义序列。
从 \u000 到 \u00ff 的 Unicode 字符由转义序列 %xx 替代，其他所有 Unicode 字符由 %uxxxx 序列替代。
*/
//编码escape
var s = "JavaScript 中国";
s = escape(s);
console.log(s);  //返回字符串“JavaScript%u4E2D%u56FD”

//unescape() 方法能够对 escape() 编码的字符串进行解码。
s = unescape(s);  //Unicode解码
console.log(s);  //返回字符串“JavaScript 中国”

//这种被解码的代码是不能够直接运行的，可以使用 eval() 方法来执行它。
var s = escape('alert("JavaScript 中国");');  //编码脚本
var s = unescape(s);  //解码脚本
eval(s);              //执行被解码的脚本