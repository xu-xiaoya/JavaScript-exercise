<form id="myform"  method="post" action="#">
	<input type="text" size="25" maxlength="50" value="123456">
</form>
var form = document.getElementById("myform");
var field1 = form.elements[0];

field1.onkeypress = function(event){
	event = event || window.event;
	if (event.preventDefault){
		event.preventDefault();//阻止这个事件的默认行为，屏蔽用户的所有按键操作
	} else {
		event.returnValue = false;
	}
}