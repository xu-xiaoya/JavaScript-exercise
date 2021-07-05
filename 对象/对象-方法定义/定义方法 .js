//方法一
var o = {
    x: function() {
        alert("method1");
    }
}
//方法二
var o = {}
o.x = function() {
    alert("method2");
}

o.x();//调用对象方法