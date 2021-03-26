// 兼容IE浏览器
if (window.ActiveXObject) { 						
    document.write("<script id=ie_onload defer src=javascript:void(0)><\/script>");							// 写入脚本标签
    document.getElementById("ie_onload").onreadystatechange = function() {  // 判断脚本标签的状态
        if (this.readyState == "complete") { // 如果状态为完成，则说明文档结构加载已完毕
            this.onreadystatechange = null; 		// 清空当前方法
            f();	// 调用预先执行的回调函数
        }
    }
}

// 兼容Safari浏览器
if (/WebKit/i.test(navigator.userAgent)) { 		
    var _timer = setInterval(function() {		// 定义时间监测器
        if (/loaded|complete/.test(document.readyState)) {
		// 如果当前状态显示完成
            clearInterval(_timer); 				// 清除时间监测器
            f();									// 调用预先执行的回调函数
        }
    }, 10);
}