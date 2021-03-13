var p = document.createElement("p");	            // 创建一个p元素
var h1 = document.createElement("h1");	            // 创建一个h1元素
var txt = document.createTextNode("Hello World");   // 创建一个文本节点，文本内容为“Hello World”

p.appendChild(txt); 					// 把文本节点增加到段落中
h1.appendChild(p); 						// 把段落元素增加到标题元素中
document.body.appendChild(h1);			// 把标题元素增加到body元素中

var new_h1 = h1.cloneNode(true); 	    // 复制标题元素及其所有子节点
document.body.appendChild(new_h1);  	// 把复制的新标题元素增加到文档中