//1. 箭头函数的特性一：默认绑定外层this
//箭头函数会默认帮我们绑定外层this的值，所以在箭头函数中this的值和外层的this是一样的。

//不使用箭头函数例子：
const obj = {
	a: function() { console.log(this) }    
}
obj.a()  //打出的是obj对象

//使用箭头函数的例子：
const obj = {
    a: () => {
        console.log(this)
    }
}
obj.a()  //打出来的是window
/*因为箭头函数默认不会使用自己的this，而是会和外层的this保持一致，最外层的this就是window对象。*/

//2. 箭头函数的特性二：不能用call方法修改里面的this
const obj = {
    a: () => {
        console.log(this)
    }
}
obj.a.call('123')  //打出来的结果依然是window对象


//多层对象嵌套函数的this：
const obj = {
    a: function() { console.log(this) },
    b: {
    	c: function() {console.log(this)}
	}
}
obj.a()   // 所在方法a是对象obj下的，故是obj对象, 相当于obj.a.call(obj)
obj.b.c() // 所在方法c是对象obj.b下的，打出的是obj.b对象, 相当于obj.b.c.call(obj.b)

//箭头函数：
const obj = {
    a: function() { console.log(this) },
    b: {
    	c: () => {console.log(this)}
	}
}
obj.a()    //没有使用箭头函数打出的是obj
obj.b.c()  //打出的是window对象！！
//表示多层对象嵌套里箭头函数里this是和最最外层保持一致的，最外层的obj对象的this就是window对象，故箭头函数里this也是window。
