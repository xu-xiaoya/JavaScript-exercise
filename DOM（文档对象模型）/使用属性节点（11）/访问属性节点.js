/*
name:返回属性的名称
value：设置或返回属性的值
specified：如果属性值是在代码中设置的，返回true，如果为默认值，返回false

创建属性节点：document.createAttribute(name)
*/
<div id = "box">document.createAttribute(name)</div>

var element = document.getElementById("box");
var attr = document.createAttribute("align");

attr.value = "center";
element.setAttributeNode(attr);     //将新创建的属性添加到元素中

//三种访问属性方式：
//attribute属性、getAttributeNode都会返回对应属性的Attr节点，需用value访问值
alert(element.attributes["align"].value);
alert(element.getAttributeNode("align").value);
//getAttribute直接返回属性的值
alert(element.getAttribute("align"));

