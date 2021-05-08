//【示例1】
var s = 'script language = "javascript" type= " text / javascript"';   // 定义字符串
var f = function($1) { 
	// 定义替换文本函数，参数为第一个子表达式匹配文本
    return $1.substring( 0, 1 ).toUpperCase() + $1.substring( 1 ); 
	// 把匹配文本的首字母转换为大写
}
var a = s.replace( /(\b\w+\b)/g, f); 			// 匹配文本并进行替换
alert(a); 
// 返回字符串Script Language = "Javascript" Type = " Text /Javascript"


//【示例2】对于上面示例，还可以进一步延伸，使用小括号以获取更多匹配文本的信息。例如，直接利用小括号传递单词的首字母，然后进行大小写转换处理：
var s = 'script language = "javascript" type= " text / javascript"';
var f = function($1,$2,$3){ 	// 定义替换文本函数，请注意参数的变化
    return $2.toUpperCase()+$3 ;
}
var a = s.replace( /\b(\w)(\w*)\b/g, f );
 	// 返回字符串Script Language = "Javascript" Type = " Text /Javascript"



//【示例3】把上面示例中替换文本函数改为如下形式：
var f = function(){
    return arguments[1].toUpperCase()+arguments[2] ;
}


//【示例4】
var s = 'script language = "javascript" type= " text / javascript"';
var f = function(){
    for (var i = 0; i < arguments.length; i++) {
        alert( "第" + ( i + 1 ) + "个参数的值：" + arguments[i]);
    }
}
var a = s.replace( /\b(\w)(\w*)\b/g, f );