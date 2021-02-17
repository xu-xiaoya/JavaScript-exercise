/*call()和apply()方法可以直接改变被执行函数的作用域 */

function f() { 
    alert(this.x+this.y);
}
var o = {       //对象直接量
    x : 1,
    y : 2
}
//call把函数f()强制转换为对象o的一个方法并执行，这样this指代对象o
f.call(o);  //3      
