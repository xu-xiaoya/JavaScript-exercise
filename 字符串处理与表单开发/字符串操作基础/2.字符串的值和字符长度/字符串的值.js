//【示例1】
var s = "javascript";
var a = s.toString();				// 返回字符串"javascript"


//【示例2】valueOf()方法与toString()方法功能相同，它也能够返回字符串的原始值。
var s = "javascript";
var a = s.valueOf();				// 返回字符串"javascript"


//【示例3】在JavaScript中，任何对象都支持toString()方法。不过，用户可以重写该方法，实现更个性的显示。
var s = "abcdef";
document.writeln(s); 						// 显示字符串"abcdef"
document.writeln(s.toString());
// 调用字符串的方法toString()，把字符串对象转换为字符串显示
// 重写String对象的原型方法toString()
// 参数color表示显示字符串的颜色
String.prototype.toString = function(color) {
    var color = color || "red";				// 如果省略参数，则显示为红色
    return '<font color="' + color + '">' + this.valueOf() + '</font>'; 
	// 返回格式化显示带有颜色的字符串
}
document.writeln(s.toString());			// 显示红色字符串"abcdef"
document.writeln(s.toString("blue"));	// 显示蓝色字符串"abcdef"
