// 定义XMLHttpRequest对象  ajax核心
//功能：向服务器发送请求并且接收服务器返回结果
//优点：异步->用户优雅美观
// 参数：无
// 返回值：XMLHttpRequest对象实例
function createXMLHTTPObject() {
    var XMLHttpFactories = [// 兼容不同浏览器和版本的创建函数数组
        
        //现代标准浏览器
        //通过new关键字来创建ajax核心对象
        function () {return new XMLHttpRequest()},
        
        //针对IE不同版本尝试创建ActiveX对象
        function () {return new ActiveXObject("Msxml2.XMLHTTP")},
        function () {return new ActiveXObject("Msxml3.XMLHTTP")},
        function () {return new ActiveXObject("Microsoft.XMLHTTP")},
    ];
    var xmlhttp = false;
    for (var i = 0; i < XMLHttpFactories.length; i++) { 
	//尝试调用匿名函数，如果成功则返回XMLHttpRequest对象，否则继续调用下一个
        try {
            xmlhttp = XMLHttpFactories[i]();
        } catch (e) {
            continue; 			// 如果发生异常，则继续下一个函数调用
        }
        break; 					// 如果成功，则中止循环
    }
    return xmlhttp; 				// 返回对象实例
}