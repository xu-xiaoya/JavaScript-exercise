//使用charAt()把字符串中每个字符都装入一个数组中，
//从而可以为String对象扩展一个原型方法，用来把字符串转换为数组。
String.prototype.toArray = function() {	// 把字符串转换为数组
    var l = this.length, a = [];		// 获取当前字符串长度，并定义空数组
    if ( l ) { 							// 如果存在则执行循环操作
        for (var i = 0; i < l; i++) { 	// 遍历字符串，间接枚举每个字符
            a.push( this.charAt( i )); 	// 把每个字符按顺序装入数组
        }
    }
    return a; 							// 返回数组
}

var s = "abcdefghijklmn".toArray();	// 把字符串转换为数组
for (var i in s) { 					// 遍历被转换的字符串，并枚举每个字符
    alert(s[i]);
}
