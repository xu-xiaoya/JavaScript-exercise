//【示例】
var a = [35835, 32773, 24744, 22909], b = [];	// 声明一个字符编码的数组
for (var i in a ) {     // 遍历数组
    b.push( String.fromCharCode(a[i]) );  // 把每个字符编码都转换为字符串
}
alert( b.join( "" ) ); 						// 返回字符串"读者您好"

var b = String.fromCharCode( 35835, 32773, 24744, 22909 ) ; // 传递多个参数，返回字符串"读者您好"

var a = [35835, 32773, 24744, 22909], b = [];
var b = String.fromCharCode.apply( null, a );
 // 使用apply()方法调用fromCharCode()方法，并传递数组参数
alert( b ); 									// 返回字符串"读者您好"