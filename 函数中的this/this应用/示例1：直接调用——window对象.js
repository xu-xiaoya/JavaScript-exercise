function f() {
    this.x = function (x) {     //使用this关键字为函数定义一个方法x()
        return x
    }
}
f();    //直接调用函数f()，函数的执行作用域为全局域，故为window对象 => this指向window对象
alert(window.x(4));