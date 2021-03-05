var error = false;
try {
    var w = window.open("https://www.baidu.com/", "_blank");
    if (w == null) {
        error = true;
    }
} catch(ex) {
    error = true;
}
if (error) alert("浏览器禁止弹出窗口");