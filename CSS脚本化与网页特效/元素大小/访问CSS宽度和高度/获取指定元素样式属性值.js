/*
<div id="div" style="width:200px;border-style:solid;"></div>
window.onload = function(){
	var div = document.getElementsByTagName("div")[0];
    div.style.width = "100px";			// 设置元素的宽度
    var w = div.style.width; 			// 获取元素的宽度，返回字符串"100px"

	alert(w);
}

未定义div元素的宽度，默认（auto）实际宽度显示为100%，此时返回空字符串
<div id="div" style="border:solid;"></div>
<script>
var div = document.getElementsByTagName("div")[0];
alert(div.style.width); 					// 返回空字符串
</script>
*/

// 获取指定元素的样式属性值
// 参数：e表示具体的元素，n表示要获取元素的脚本样式的属性名，如"width"、"borderColor"
// 返回值：返回该元素e的样式属性n的值
function getStyle(e,n) {
    if (e.style[n]) {  // 如果在Style对象中存在，说明已显式定义，则返回这个值
        return e.style[n];
    }
    else if (e.currentStyle) {  // 否则，如果是IE浏览器，则利用它的私有方法读取当前值
        return e.currentStyle[n];
    }
    // 如果是支持DOM标准的浏览器，则利用DOM定义的方法读取样式属性值
    else if (document.defaultView && document.defaultView.getComputedStyle) {
        //**DOM标准读取css属性值时不使用驼峰命名，而是连字符“-”连接多个单词，故查找“大写字母”，并用连字符“+大写字母”全局替换
        n = n.replace(/([A-Z])/g,"-$1");	// 转换参数的属性名
        n = n.toLowerCase();
        var s = document.defaultView.getComputedStyle(e,null); 
		// 获取当前元素的样式属性对象
        if (s) 	return s.getPropertyValue(n);		// 如果当前元素的样式属性对象存在 则获取属性值
    } else	return null;							// 如果都不支持，则返回null
}

<div id="div"></div>
var div = document.getElementsByTagName("div")[0]; 	// 获取当前元素
var w = getStyle(div,"width");		// 调用扩展函数，返回字符串"auto"
alert(w);