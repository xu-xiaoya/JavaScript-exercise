//DOM的document.getELementById()
<form id="form1"></form>
var form = document.getElementById("form1");

//HTML的document.forms集合获取
<form id="form1"  name="form1"></form>
<form id="form2" name="form2"></form>

var form1 = document.forms[0]; 
var form1 = document.forms["form2"];