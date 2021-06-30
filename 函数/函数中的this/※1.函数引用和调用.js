var o = {
    name: "o",
    f: function() {
        return this;
    }
}
/*函数引用：改变函数的执行作用域*/
o.o1 = {
    name: "o1",
    me : o.f        //引用对象o的方法f
}
var who = o.o1.me();
alert(who.name);    //o1, 说明this代表对象o1



/*函数调用：不改变函数的执行作用域 */
o.o1 = {
    name: "o1",
    me : o.f()        //调用对象o的方法f
}
var who = o.o1.me;
alert(who.name);    //o, 说明this代表对象o