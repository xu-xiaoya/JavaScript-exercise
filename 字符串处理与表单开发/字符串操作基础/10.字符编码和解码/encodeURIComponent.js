//对于encodeURIComponent()方法编码的结果进行解码，可以使用decodeURIComponent()方法来快速实现：
var s = "http:// www.mysite.cn/navi/search.asp?keyword=URI";
b = encodeURIComponent(s);
b = decodeURIComponent(b)
document.write(b);
