var s = "javascript";   //测试使用的字符串直接量
var r = /\w/g;          //匹配模式
while ((a = r.exec(s) != null) {        //循环执行匹配操作
    alert(a[0] + "\n" + a.index + "\n" + r.lastIndex);  //显示每次匹配操作是返回的结果数组信息
}