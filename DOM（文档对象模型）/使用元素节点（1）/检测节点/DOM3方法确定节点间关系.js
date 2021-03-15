//compareDocumentPosition() 方法比较两个节点，并返回描述它们在文档中位置的整数。
var box = document.getElementById("box");
var span = document.getElementsByTagName("span")[0];

alert(box.compareDocumentPosition(span));
//20,表示<span>在<div id = "box">内部（16），且<div id = "box">在<span>之前（4）

/*
请看上面的例子。返回值可能是：

1：没有关系，两个节点不属于同一个文档。
2：第一节点（<div id = "box">）位于第二个节点后（<span>）。
4：第一节点（<div id = "box">）定位在第二节点（<span>）前。
8：第一节点（<div id = "box">）位于第二节点内（<span>）。
16：第二节点（<span>）位于第一节点内（<div id = "box">）。
32：没有关系，或是两个节点是同一元素的两个属性。
*/