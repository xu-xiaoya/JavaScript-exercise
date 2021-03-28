var r = new RegExp("\\b\\w","gi");		// 构造正则表达式对象
var r1 = new RegExp(r); 			// 把正则表达式变量作为参数传递给RegExp()构造函数
var s = "javascript JAVA";				// 字符串直接量
var a = s.match(r); 					// 匹配查找
alert(a); 								// 返回数组["j", "J"]