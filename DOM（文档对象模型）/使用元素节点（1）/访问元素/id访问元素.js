//<div id="box">盒子</div>

var box = document.getElementById("box");	// 获取指定盒子的引用指针
var info = "nodeName：" + box.nodeName; 	// 获取该节点的名称
info += "\rnodeType：" + box.nodeType; 	// 获取该节点的类型
info += "\rparentNode：" + box.parentNode.nodeName; 
	// 获取该节点的父节点名称
info += "\rchildNodes：" + box.childNodes[0].nodeName; 
	// 获取该节点的子节点名称
alert(info); 								// 显示提示信息
