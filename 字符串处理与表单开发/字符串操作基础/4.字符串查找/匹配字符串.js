//【示例6】
var s = "http:// www.mysite.cn/index.html";
var n = s.search( "// " ); 				// 返回值为5

//【示例7】match()方法强大很多，它能够找出所有匹配的子字符串，并存储在一个数组中返回。
var s = "http:// www.mysite.cn/index.html";
var a = s.match( /h/g ); 					// 全局匹配所有字符h
alert( a ); 								// 返回数组[h,h]

//【示例8】使用match方法匹配URL字符串中所有点号字符
var s = "http:// www.mysite.cn/index.html";	// 匹配字符串
//a数组，第一个元素存放的是匹配文本，其余元素存放的是与正则表达式的子表达式匹配的文本
var a = s.match( /(\.).*(\.).*(\.)/ ); 	// 执行一次匹配检索
alert( a.length ); 	// 返回4，说明返回的是一个包含4个元素的数组
alert( a[0] ); 		// 返回字符串".mysite.cn/index."
alert( a[1] ); 		// 返回第一个字符.（点号），由第一个子表达式匹配并存储
alert( a[2] ); 		// 返回第二个字符.（点号），由第二个子表达式匹配并存储
alert( a[3] ); 		// 返回第三个字符.（点号），由第三个子表达式匹配并存储

alert( a.index ); 	// 返回值10，说明第一个点号字符的起始下标位置
alert( a.input ); 	// 返回被匹配字符串"http:// www.mysite.cn/index.html"