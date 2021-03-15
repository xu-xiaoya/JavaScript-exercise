<div id="box"><span></span></div>

var box = document.getElementById("box");
var span = document.getElementsByTagName("span")[0];

alert(box.contains(span));//检测div中是否有span
