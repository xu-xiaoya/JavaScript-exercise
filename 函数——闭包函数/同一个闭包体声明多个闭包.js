function f(x) {
    var temp = x;
    return function (x) {   //返回闭包
        temp += x;
        alert(temp);
    }
}
var a = f(50);//生成第一个闭包
var b = f(100);//生成第二个闭包
a(5);   //55
b(10);  //110