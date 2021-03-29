/*a的ASCII码为97，被转换为十六进制数值后为61，若要匹配a，则应在前面添加“\x”前缀，以提示它为ASCII码 */
var r = /\x61/;					// 以ASCII编码（16进制）匹配字母a
var s = "javascript";
var a = s.match(r); 				// 匹配第一个字符a

//a的ASCII码八进制为141
var r = /\141/;
var s = "javascript";
var a = s.match(r);