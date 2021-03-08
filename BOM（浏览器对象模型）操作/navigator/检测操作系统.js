/*
windows版本的操作系统都包含“win”字符串， Macintosh版本操作系统包含“Mac"
UNIX包含"X11", Linux包含 “X11” 和 “Linux”
*/
var isWin = (navigator.userAgent.indexOf("Win") != -1);     //若为Windows系统返回true
var isMac = (navigator.userAgent.indexOf("Mac") != -1);     //若为Mac返回true
var isLinux = (navigator.userAgent.indexOf("Linux") != -1); //若为Linux则返回true
var isUNIX = (navigator.userAgent.indexOf("X11") != -1);    //若为UNIX则返回true