var element = document.createElement("div");
element.className = "red";
var TextNode = document.createTextNode("Hello World!"); //创建文本节点
element.appendChild(TextNode);  //将文本节点添加到div元素中
document.body.appendChild(element);      //将div元素添加到文档body元素中