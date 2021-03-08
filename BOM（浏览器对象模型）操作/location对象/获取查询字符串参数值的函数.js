//将search参数中的每对名/值对存储在对象中并返回
var queryString = function() {
    var q = location.search.substring(1);//获取查询字符串,"id=123&name=location"
    var a = q.split("&");   //以&为界把查询字符串劈开为数组
    var o = {}; 
    for (var i = 0; i < a.length; i++) {//遍历数组
        var n = a[i].indexOf("=");  //获取每个参数中的等号小标位置
        if (n == -1) continue;  //如果没有发现=则跳到下一次循环继续操作
        var v1 = a[i].substring(0,n);//截取等号前的参数名称
        var v2 = a[i].substring(n+1);//截取等号后的参数值
        o[v1] = unescape(v2);//以名/值对的形式存储在对象中
    } 
    return o;//返回对象
}

//调用函数
var f1 = queryString();
for (var i in f1) {
    alert(i + "=" + f1[i]);
}


//tip:如果url中没有查询字符串信息，可以手动补加"?id=123&name=location"，再次刷新页面即可查询