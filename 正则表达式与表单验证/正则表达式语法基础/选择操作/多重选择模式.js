var s1 = "abc";
var s2 = "efg";
var s3 = "123";
var s4 = "456";
var r = /(abc)|(efg)|(123)|(456)/; 	// 多重选择匹配:多个子模式之间加上选择操作符|
var b1 = r.test(s1); 					// 返回true
var b2 = r.test(s2); 					// 返回true
var b3 = r.test(s3); 					// 返回true
var b4 = r.test(s4); 					// 返回true