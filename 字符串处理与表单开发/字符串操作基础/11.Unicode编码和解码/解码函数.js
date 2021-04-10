var fromUnicode = String.prototype.fromUnicode = function(){// 对Unicode编码进行解码操作
   var _this = arguments[0] || this; // 判断是否存在参数，如果存在则使用静态方法调用参数值，

   function f(){	// 定义替换文本函数
      return String.fromCharCode(arguments[1]); // 把第一个子表达式值（Unicode编码）转换为字符
   }
   return _this.replace(/&#(\d*);/gmi, f); // 使用replace()匹配并替换Unicode编码为字符
};

var s = "javascript中国";			// 定义字符串直接量
s = s.toUnicode();					// 对字符串进行Unicode编码
s = s.fromUnicode();				// 对被编码的字符串进行解码
alert(s); 							// 返回字符串“javascript中国”
