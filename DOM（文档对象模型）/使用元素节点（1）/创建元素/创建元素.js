//创建新元素
var p = document.createElement("p");	// 创建段落节点
var info = "nodeName：" + p.nodeName; 	// 获取节点名称
info += "，nodeType：" + p.nodeType;    // 获取节点类型，如果为1则表示元素节点

//将创建的元素增加到body元素下
document.body.appendChild(p);