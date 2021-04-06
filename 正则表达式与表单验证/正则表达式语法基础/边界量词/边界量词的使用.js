var s = "how are you";


//匹配文本行中最后一个单词
var r = /(?:\w+)$/;//返回["you"]

//匹配文本行中开头一个单词
var r = /^(?:\w+)/;//返回["how"]

//匹配文本行中每一个单词
var r = /(?:\w+)/g;//返回["how", "are", "you"];


var a =s.match(r);