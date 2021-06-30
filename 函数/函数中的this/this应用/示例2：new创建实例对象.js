function f() {
    this.x = function(x) {      //使用this关键字为函数定义一个方法x()
        return x
    }
}
//使用new实例化函数 f,并把实例化对象赋值给变量a，则a有f的函数结构
var a = new f();
alert(a.x(4));      //用a调用方法x(),返回4