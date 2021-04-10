var toUnicode = String.prototype.toUnicode = function(){ // 对字符串进行编码方法
   var _this = arguments[0] || this;  // 判断是否存在参数，如果存在则使用静态方法调用参数值，否则作为字符串对象的

   function f() {	// 定义替换文本函数
      return "&#" + arguments[0].charCodeAt(0) + ";"; // 以网页编码格式显示被编码的字符串
   }
   return _this.replace(/[^\u00-\uFF]|\w/gmi, f); // 使用replace()方法执行匹配、替换操作
};

var s = "javascript中国";		// 定义字符串直接量
s = toUnicode(s); 	            // 以静态方式调用toUnicode()方法
alert(s); 						// 返回Unicode编码字符串
//&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#20013;&#22269;

var s = "javascript中国";
s = s.toUnicode();				// 以String对象的方法调用toUnicode()方法
alert(s);
document.write(s);