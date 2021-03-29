var s = "ggle gogle google gooogle goooogle gooooogle goooooogle gooooooogle goooooooogle";	
//如果仅匹配单词ggle和gogle：
var r = /go?gle/g; 			// 匹配前一项字符o0次或1次
var a = s.match(r); 		// 返回数组["ggle", "gogle"]

var r = /go{0,1}gle/g; 	// 匹配前一项字符o0次或1次
var a = s.match(r); 		// 返回数组["ggle", "gogle"]


//如果仅匹配第四个单词gooogle，可以设计：
var r = /go{3}gle/g; 		// 匹配前一项字符o重复显示3次
var a = s.match(r); 		// 返回数组["gooogle"]

var r = /gooogle/g; 		// 匹配字符gooogle
var a = s.match(r); 		// 返回数组["gooogle"]


//如果希望匹配第四个~第六个之间的单词，可以设计：
var r = /go{3,5}gle/g; 	// 匹配第四个到第六个之间的单词
var a = s.match(r); 		// 返回数组["gooogle", "goooogle", "gooooogle"]


//如果希望匹配所有单词，可以设计：
var r = /go*gle/g; 	// 匹配所有的单词
var a = s.match(r); // 返回数组["ggle", "gogle", "google", "gooogle", "goooogle", "gooooogle", "goooooogle", "goooooooogle", "gooooooooogle"]

var r = /go{0,}gle/g; 		// 匹配所有的单词
var a = s.match(r); // 返回数组["ggle", "gogle", "google", "gooogle", "goooogle", "gooooogle", "goooooogle", "goooooooogle", "gooooooooogle"]


  
//如果希望匹配包含字符＂o＂的所有单词，可以设计：
var r = /go+gle/g; 			// 匹配的单词中字符＂o＂至少出现1次
var a = s.match(r); // 返回数组["gogle", "google", "gooogle", "goooogle", "gooooogle", "goooooogle", "goooooooogle", "gooooooooogle"]

var r = /go{1,}gle/g;	 	// 匹配的单词中字符＂o＂至少出现1次
var a = s.match(r); // 返回数组["gogle", "google", "gooogle", "goooogle", "gooooogle", "goooooogle", "goooooooogle", "gooooooooogle"]