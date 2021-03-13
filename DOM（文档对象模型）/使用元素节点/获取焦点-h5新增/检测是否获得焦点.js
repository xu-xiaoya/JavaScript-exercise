<input type="text" id="text" />

document.getElementById("text").focus();
if (document.hasFocus()) {
	document.activeElement.style.backgroundColor = "yellow";
}