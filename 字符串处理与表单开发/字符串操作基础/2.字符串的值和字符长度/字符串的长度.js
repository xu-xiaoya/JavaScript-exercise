//【示例1】
var s = "String对象长度";					// 定义字符串直接量
alert(s.length); 							// 返回10

//【示例2】利用循环结构枚举每个字符，并根据字符的字符编码，判断当前字符是单字节还是双字节，然后递加字符串的字节数。
String.prototype.lengthB = function( ) { 
	// 获取并返回指定字符串的字节数，扩展String对象方法
    var b = 0, l = this.length; 
	// 初始化字节数递加变量，并获取字符串参数的字符个数
    if (l) { 	// 如果存在字符串，则执行计算
        for ( var i = 0; i < l; i++) { 		// 遍历字符串，枚举每个字符
            if (this.charCodeAt( i ) > 255) { 
            // 如果当前字符的编码大于255，说明它是双字节字符
                b += 2; 						// 则累加2个
            } else {
                b ++; 						// 否则递加一次
            }
        }
        return b; 						// 返回字节数
    } else {
        return 0; 						// 如果参数为空，则返回0个
    }
}

var s = "String对象长度";				// 定义字符串直接量
alert(s.lengthB())						// 返回14

//检测字符双字节或单字节：
for( var i = 0; i < l; i ++ ){
    var c = this.charAt( i ); 			// 获取当前字符
    if ( escape( c ).length > 4 ) {
	// 如果字符的转义序列大于4位，说明是双字节
        b += 2;
    }else if( c != "\r" ) {
        b ++ ;
    }
}

for( var i = 0; i < l; i ++ ){
    var c = this.charAt( i );
    if ( /^[\u0000-\u00ff]$/.test(c) ) {
	// 其中/^[\u0000-\u00ff]$/表示正则表达式，匹配单字节字符
        b ++ ;
    }else {
        b += 2;
    }
}

//【示例3】利用正则表达式把字符串中双字节字符临时替换为两个字符，然后调用length属性获取临时字符串的长度：
String.prototype.lengthB = function() {
    var s = this.replace( /[^\x00-\xff]/g, "**" );
    return s.length;
}