//【示例1】小写字母a的编码为97，大写字母A的编码为65，则比较时字符串"a"就大于"A"。
alert( "a" > "A" ); 	// 返回true

//【示例2】
var s = "javascript";	// 定义字符串直接量
var a = s.split( "" ); 	// 把字符串转换为数组
var s1 = a.sort( function( a, b ) {	// 对数组进行排序
    return a.localeCompare( b ) 	// 将根据前后字符在本地的约定进行排序
});
a = s1.join( "" ); 	// 然后再把数组还原为字符串
alert( a ); 					// 返回字符串"aacijprstv"
