//清除字符串首尾的空格
//trim能够复制字符串并去掉首尾的空格
//【示例2】这个方法实现起来比较简单，可以使用正则表达式来进行快速匹配：
var trim = String.prototype.trim = function(){
	// 定义trim()方法的静态方法和对象方法
   return ( arguments[0] ? arguments[0] : this ).toString().
replace( /(^\s*)|(\s*$)/gm, "" );//\s空格，^开头，$结尾处，m多行匹配，g连续匹配
}


//【示例3】清除字符串左侧空格
var lTrim = String.prototype.lTrim = function(){
   return ( arguments[0] ? arguments[0] : this ).toString().
replace( /^\s*/gm, "" );
}


//【示例4】清除字符串右侧空格
var rTrim = String.prototype.rTrim = function(){
   return ( arguments[0] ? arguments[0] : this ).toString().
replace( /\s*$/gm, "" );
}


//【示例5】如果要清除字符串中所有空格，包括字符串内部的，则可以使用如下方法来实现。
var allTrim = String.prototype.allTrim() = function(){
   return ( arguments[0] ? arguments[0] : this ).toString().
replace( /\s*/gm, "" );
}