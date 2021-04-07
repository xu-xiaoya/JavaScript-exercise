//同一个正则表达式引用前面的子表达式
var s ="<h1>title<h1><p>text<p>";
var r = /(<\/?\w+>).*\1/g;  //\1引用的是第一个带括号的子表达式
var a = s.match(r); 		// 返回数组["<h1>title<h1>" , "<p>text<p>"]


//子表达式嵌套在别的子表达式中，位置编号根据左括号的顺序来定的
var s ="<h1>title<h1><p>text<p>";
var r = /((<\/?\w+>).*\2)/g;//\2为(<\/?\w+>)
var a = s.match(r); 		// 返回数组["<h1>title<h1>" , "<p>text<p>"]


//对前面子表达式的引用指的不是子表达式，而是与模式匹配的文本
var s ="<h1>title</h1><p>text</p>";
var r = /((<\/?\w+>).*\2)/g;
var a = s.match(r); 		// 返回null

//若要引用前面子表达式的匹配模式：
var r = /((<\/?\w+>).*((<\/?\w+>))/g;
var a = s.match(r); 		// 返回数组["<h1>title</h1>","<p>text</p>"]