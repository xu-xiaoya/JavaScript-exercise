var a = new RegExp("\\b\\w","gi");		// 构造正则表达式对象
var b = new RegExp(a); 				// 对正则表达式对象进行再封装
var c = RegExp(a); 						// 返回正则表达式直接量
alert(a.constructor == RegExp); 		// 返回true
alert(b.constructor == RegExp); 		// 返回true
alert(c.constructor == RegExp); 		// 返回true