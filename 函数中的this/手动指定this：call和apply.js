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


//※函数的this的值是可以用call方法修改的，而且只有在调用的时候我们才能确定this的值。
const obj = {
    name: 'Jerry',
    greet: function() {
        console.log(this.name)
    }
}
obj.greet()  //第一种调用方法，简化写法
obj.greet.call(obj) //第二种调用方法,完整写法，可以手动指定this

//手动指定this：
obj.greet.call({name: 'Spike'})  //打出来的是 Spike