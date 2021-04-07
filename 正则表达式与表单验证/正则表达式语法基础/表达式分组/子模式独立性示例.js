/*子表达式具有独立的匹配功能，匹配结果也具有独立性 */

var s = "javascript is not java";
var r = /java(script)?/g;//?修饰子表达式
var a = s.match(r);//返回[“javascript","java"]


var s = "ab=21,bc=45,cd=43";
var r = /(\w+)=(\d*)/;
var a = s.match(r);//返回["ab=21","ab","21"]