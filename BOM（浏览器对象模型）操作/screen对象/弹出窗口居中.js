function center(url) {
    var w = screen.availWidth/2;    //获取客户端屏幕的宽度一半
    var h = screen.availHeight/2;   //获取客户端屏幕的高度一半
    var t = (screen.availHeight-h)/2;   //计算居中显示时顶部坐标
    var l = (screen.availWidth-w)/2;    //计算居中显示时左侧坐标
    var p = "top=" + t +",left=" + l + ",width=" + w + ",height=" +h;//设计坐标参数字符串
    var win = window.open(url,"url",p); //打开指定的窗口，并传递参数
    win.focus();
}
center("http://www.baidu.com/");