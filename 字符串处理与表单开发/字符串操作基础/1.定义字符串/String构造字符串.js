//【示例1】
var s = new String();			// 创建一个空字符串对象，并赋值给变量s
var s = new String("我是构造字符串");// 创建字符串对象，初始化之后赋值给变量s

//【示例2】
var s1 = new String( 1 ); 		// 构造字符串
var s2 = "1";					// 定义字符串直接量
alert( typeof s1 ); 			// 返回object，说明是引用型对象
alert( typeof s2 ); 			// 返回string，说明是值类型字符串

//【示例3】String()也可以作为普通函数使用，把参数转换为字符串类型的值返回，此时它就不是构造函数了。
var s = String( 123456 ); 		// 包装字符串
alert( s ); 					// 返回字符串"123456"
alert( typeof s );		 		// 返回string，说明该方法不再是构造函数

//【示例4】String()可以带有多个参数，但是它仅处理第一个参数，并把它转换为字符串返回。
var s = String( 1, 2, 3, 4, 5, 6 ); 	// 带有多个参数
alert( s ); 							// 返回字符串"1"
alert( typeof s ); 						// 返回string，数值被转换为字符串

//【示例5】下面的变量n在构造函数内经过多次计算之后，最后值递增为5。如下：
var n = 1; 										// 初始化变量
var s = new String( ++ n, ++ n, ++ n, ++ n); 	// 字符串构造处理
alert( s ); 							// 返回2
alert( n ); 							// 返回5
alert( typeof s ); 						// 返回object，说明是引用类型对象
alert( typeof n ); 						// 返回number，说明是数值类型