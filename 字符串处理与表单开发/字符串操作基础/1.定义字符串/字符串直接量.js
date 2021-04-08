//【示例1】任何字符被引号包含，都会被转换为字符串类型数据。
var s = "true";					// 把布尔值转换为字符串直接量
var s = "123";						// 把数值转换为字符串直接量
var s = "[1,2,3]"; 					// 把数组转换为字符串直接量
var s = "{x:1,y:2}";				// 把对象转换为字符串直接量
var s = "alert('Hello,World')"; 	// 把可执行表达式转换为字符串直接量


//【示例2】单引号和双引号配合使用，以应对特殊形式的字符串需要。
var s = "alert('Hello,World')";

var s = 'alert("Hello,World")';

var s = 'alert('Hello,World')'; 	// 非法的字符串
var s = "alert("Hello,World")";	    // 非法的字符串

//【示例3】如果要表示引号字符，需要使用转义序列来表示。
var s = """;							// 非法引号字符串
var s = "\"";							// 有效的引号字符串

//【示例4】对于字符串类型的语句或表达式，可以调用静态方法eval()来执行。
var s = "alert('Hello,World')"; 		// 表达式字符串
eval(s); 								// 执行表达式字符串