//箭头函数：()=>{ }
//箭头函数中的this是在定义函数的时候绑定，而不是在执行函数的时候绑定。
//箭头函数没有自己的this值，箭头函数中所使用的this都是来自函数作用域链,在函数作用域链中一层一层往上找
//多层对象嵌套里箭头函数里this是和最最外层保持一致的


// 简化规则
//简化了匿名函数的写法(去掉function，小括号和大括号之间使用箭头)，不等价于匿名函数
var arr = [23,9,78,6,45];
arr.sort( (a,b)=>{
    return a-b;
} )

// 箭头函数的函数体中只有一行代码，可以省略`{}`
// 如果只有一行代码且是return形式，必须省略`{}`和return
arr.sort( (a,b)=>{return a-b} )
//↓
arr.sort((a,b)=>a-b)

// 如果只有一个形参，可以省略()
arr.map( (elem)=>{return elem} )
//↓
arr.map( elem=>elem )



//示例：用箭头函数求三个数的平均值
//法一
var pingjun=(a,b,c)=> {
    return (a+b+c)/3;
};
//法二
var pingjun= (a,b,c)=> (a+b+c)/3;

console.log(pingjun(1,2,3));
