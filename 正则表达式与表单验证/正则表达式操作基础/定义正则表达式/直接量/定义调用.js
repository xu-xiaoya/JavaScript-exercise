var r = /\b\w/gi;
var s = "javascript JAVA";
var a = s.match(r); 					// 直接调用正则表达式直接量
alert(a); 								// 返回数组["j", "J"]