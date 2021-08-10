var x=0;
var foo={
    x: 1,
    bar: function() {
        console.log(this.x);
        var that=this;
        return function() {
            console.log(this.x);
            console.log(that.x);
        }
    }
}

foo.bar();   
//this指向foo，执行console.log(this.x)结果为1，返回函数
// function() {
//     console.log(this.x);
//     console.log(that.x);
// }

foo.bar()(); 
//  执行console.log(this.x); 等价于window.x = 0
//  console.log(that.x); function与that形成闭包，所以that->foo，故等价于foo.x
