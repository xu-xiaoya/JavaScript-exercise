function Foo(){//函数也是一个对象
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}

Foo.a(); //强行给函数对象赋值会添加新属性a（不在Foo内部），4
let obj = new Foo();    
obj.a(); //new使this指向obj，2
//obj __proto__还会指向Foo.prototype.a，但优先调用自身的a

Foo.a(); //new Foo()，Foo是全局变量，所以更改给函数对象添加的新属性a方法
