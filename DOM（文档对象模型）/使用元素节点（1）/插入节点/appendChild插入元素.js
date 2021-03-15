//appendchild向当前节点的子节点列表的末尾添加新的子节点。

//<div id="box"></div>

var p = document.createElement("p");	    // 创建段落节点
var txt = document.createTextNode("盒模型");// 创建文本节点，文本内容为“盒模型”

p.appendChild(txt); 	// 把文本节点增加到段落节点中
document.getElementById("box").appendChild(p);   // 获取id为box的元素，把段落节点增加进来