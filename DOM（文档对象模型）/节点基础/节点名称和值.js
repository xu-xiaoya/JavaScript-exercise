/*
nodeName ：读取节点的名称
nodeValue：读取值
*/
var node = document.getElementsByTagName("body")[0];
if (node.nodeType == 1)
    var value = node.nodeName;
console.log(value);