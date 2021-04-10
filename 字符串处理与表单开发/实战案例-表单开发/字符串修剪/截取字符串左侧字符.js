//截取字符串左侧字符
var left = String.prototype.left = function(){// 定义静态方法left()，以及String对象的方法left()
    var l = arguments.length; 				// 获取函数参数长度
    if( l == 0 ){ 							// 如果没有参数
        throw new Error( "缺少参数。" ); 		// 则抛出异常
    } else if( l == 1 ){ 		// 如果仅有一个参数，则视为String对象的方法
        var n = arguments[0] 	// 该参数值，表示截取字符的长度
        if( n > 0 ){ 			// 如果截取字符大于0
            return this.substring( 0, n ); 
			// 则返回从字符串左侧开始截取的子字符串
        }else if( n < 1  ){ 		// 如果小于1，则说明截取字符不够
            return "";			// 则返回空字符串
        }else {	// 否则
            throw new Error( "参数类型错误。" ); // 抛出异常，提示参数类型不是数值型数据
        }
    }else{						// 如果参数长度大于1，则说明是静态方法
        if( ( typeof arguments[0]  == "string" ) &&  ( arguments[1]  > 0 ) ){ // 如果第一个参数类型为字符串，第二个参数值大于0，

            return arguments[0].substring( 0, arguments[1] ); // 返回截取的子字符串
        }else{
            throw new Error( "参数类型错误。" ); // 否则抛出异常，提示参数类型错误
        }
    }
}
var s = "javascript";
var s1 = left( s , 4 ); 		// 静态方法调用
alert( s1 ); 					// 返回字符串"java"

var s = "javascript";
var s1 = s.left( 4 );		 	// 对象方法调用
alert( s1 ); 					// 返回字符串"java"