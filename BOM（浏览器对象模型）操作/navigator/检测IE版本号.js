function getIEVer() {
    var ua = navigator.userAgent;   //获取用户端信息
    var b = ua.indexOf("MISE");     //检测特殊字符串"MISE "的位置
    if (b < 0) {
        return 0;
    }
    return parseFloat(ua.substring(b+5, ua.indexOf(";", b)));//截取版本号字符串并转换为数值
}
alert(getIEVer());  //返回版本号