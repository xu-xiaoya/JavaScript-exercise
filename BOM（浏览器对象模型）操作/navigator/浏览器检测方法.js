//一、特征检测法：仅仅在意浏览器的执行能力
if (document.getElementsByTagName) {//如果存在使用该方法获取a元素
    var a = document.getElementsByTagName("a");
} else if (document.getElementsByTagName) {
    var a = document.getElementsByTagName("a");
}

//二、字符串检测法
var s = window.navigator.userAgent;//user-agent包含了web浏览器的大量信息，如名称和版本
alert(s);
//返回“Mozila /4.0(compatible;MISE 7.0;Windows NT 5.1;DigExt ;NET CLR 2.0.50727)"——IE7.0