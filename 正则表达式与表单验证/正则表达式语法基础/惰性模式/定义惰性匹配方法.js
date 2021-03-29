//定义：在重复类量词后面添加英文问号（?）后缀

var s = "<html><head><title></title></head><body></body></html>";
var r = /<.*?>/
var a = s.match(r);  //返回单个元素数组["<html>"]