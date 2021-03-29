/*若使用Unicode编码，必须制定一个4位的16进制值，并在前加上“\u”前缀 */
var r = /\u0061/;					// 以Unicode编码匹配字母a
var s = "javascript";				// 字符串直接量
var a = s.match(r); 				// 即匹配第一个字符a