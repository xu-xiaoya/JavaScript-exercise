//与post相似

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//1.创建对象ajax
var xhr = new XMLHttpRequest();
//2.创建连接:put
var method = "PUT";
var url = "接口";
xhr.open(method, url, true);

//3.增加一步： 将发送数据加密转码
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

//4.创建事件：
//只要readyState改变就会触发的事件：
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    //6：接收服务器
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
    }
}
//5.发送请求
xhr.send(`uname=tom&age=19`);