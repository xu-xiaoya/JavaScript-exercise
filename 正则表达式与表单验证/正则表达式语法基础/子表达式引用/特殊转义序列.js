//直接在定义分组的表达式中包含反向引用
var s = "abcbcacba";
//\1表示对第一个反向引用(\w)所匹配的字符a引用，同义，\2为b，\3为c
var r = /(\w)(\w)(\w)\2\3\1\3\2\1/;   
var b = s.test(r);  //检测正则表达式是否匹配该字符串
alert(b);   //true;