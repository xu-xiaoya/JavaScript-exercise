var hello = document.createTextNode("Hello World!");    //创建一个文本节点

var h1 = document.createElement("h1");         //创建一个一级标题
h1.setAttribute("title","你好，欢迎光临！");    //为一级标题定义title属性
h1.appendChild(hello);              //把文档节点增加到一级标题中
document.body.appendChild(h1);      //把一级标题增加到文档