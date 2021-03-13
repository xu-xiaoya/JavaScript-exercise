/*
document的readyState：

loading：正在加载文档
complete：已经加载完文档
*/
if (document.readyState == "complete") {
    //执行操作
}

/*
compatMode文档渲染模式：

CSS1Compat：标准模式
BackCompat：怪异模式
*/
if (document.compatMode == "CSS1Compat") {
    alert("标准模式");
} else {
    alert("怪异模式");
}

//head
var head = document.head || document.getElementsByTagName("head")[0];


