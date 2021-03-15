var element = document.createElement("div");   

//分别创建两个Text文本
var TextNode = document.createTextNode("Hello");
element.appendChild(TextNode);
var anotherTextNode = document.createTextNode(" World!");
element.appendChild(anotherTextNode);

document.body.appendChild(element);
alert(element.childNodes.length);   //2

//normalize():一般在父元素上调用
//合并Text，并删除空的Text节点
element.normalize();
alert(element.childNodes.length);   //1
alert(element.firstChild.nodeValue);    //返回"Hello World!"