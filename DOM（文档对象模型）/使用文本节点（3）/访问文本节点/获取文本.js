<div id = "div1">div元素</div>

var div = document.getElementById("div1");

//考虑浏览器兼容性
var text = div.innerHTML;
alert(text);
//标准用法如下：
var text = div.firstChild.nodeValue;
alert(text);
