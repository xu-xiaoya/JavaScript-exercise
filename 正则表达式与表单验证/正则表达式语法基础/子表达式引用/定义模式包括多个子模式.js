var s = "abcdefghijklmn";
var r = /(a(b(c)))/;
var a = s.match(r); 		// 返回数组["abc", "abc" , "bc" , "c"]
