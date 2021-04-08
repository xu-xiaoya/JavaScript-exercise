var s = "javascript", str = "";				// 定义一个字符串
var d = new Date(),a = d.getMilliseconds();	// 获取当前毫秒数
for(var i = 0; i < 10000; i ++ ) 				// 循环连接字符串10000次
    str += s;
var d = new Date(), b = d.getMilliseconds();	// 获取当前毫秒数
alert(b - a); 					// 返回203毫秒，具体值会根据系统而略有不同


//优化:
var s = "javascript", a = [];					// 定义一个字符串
var d = new Date(), b = d.getMilliseconds();	// 获取当前毫秒数
for(var i = 0; i < 10000; i ++ ) 				// 循环执行10000次
    a.push(s); 										// 把字符串装入数组
var str = a.join("");				// 通过join()方法把数组元素连接在一起
a = null; 										// 清空数组
var d = new Date(), c = d.getMilliseconds();	// 获取当前毫秒数
alert(c - b); 									// 返回29毫秒
