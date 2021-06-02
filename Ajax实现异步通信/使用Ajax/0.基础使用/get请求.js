var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//1.创建对象ajax
var xhr = new XMLHttpRequest();
//2.创建连接:get
var method = "GET";
var url = "接口";
//get请求带数据
//var url = "接口?uname=dongdong&uid=3";
xhr.open(method, url, true);

//3.创建事件：
//只要readyState改变就会触发的事件：
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    //5：接收服务器
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
    }
}
//4.发送请求
xhr.send();