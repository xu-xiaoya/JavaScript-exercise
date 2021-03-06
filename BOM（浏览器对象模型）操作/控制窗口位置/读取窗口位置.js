/*
IE、Safari、Opera和Chrome：screenLeft screenTop
Firefox: screenX screenY
读取或设置窗口的位置，即相对于屏幕左边或上边的位置
*/
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;