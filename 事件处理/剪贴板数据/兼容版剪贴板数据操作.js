var getClipboardText = function(event) {//访问clipboardData对象，以text类型调用getData方法
	var clipboardData =  (event.clipboardData || window.clipboardData);
	return clipboardData.getData("text");
}
//取得clipboardData对象之后，根据不同浏览器传入不同类型
var  setClipboardText = function(event, value) {
	if (event.clipboardData) {
		event.clipboardData.setData("text/plain", value);
	} else if (window.clipboardData) {  //IE
		window.clipboardData.setData("text", value);
	}
}