//越是排在左侧的重复类量词匹配优先级越高。
//下面示例显示当多个重复类量词同时满足条件时，会在保证右侧重复类量词最低匹配次数基础上，使最左侧的重复类量词尽可能占有所有字符。

var s = "<html><head><title></title></head><body></body></html>";
var r = /(<.*>)(<.*>)/
var a = s.match(r);
console.log(a[1]);  //左侧表达式匹配"<html><head><title></title></head><body></body></html>"
console.log(a[2]);  //右侧表达式匹配“</html>”