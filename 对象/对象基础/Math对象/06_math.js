//获取圆周率
console.log( Math.PI );//3.141592653589793

//绝对值 absolute
console.log( Math.abs(18-20) );//2

//向上取整
console.log( Math.ceil(3.14) );//4

//向下取值
console.log( Math.floor(3.14) );//3

//四舍五入
console.log( Math.round(5.49) );//5

//取随机 >=0 <1
console.log( Math.random() );

//获取随机下标 0 ~ 9
var arr = ['a','aa','aaa','b','bb','bbb','c','cc','ccc'];
//0~1  * 10   0 ~ 9.X  向下取整  0 ~ 9  
var n = Math.floor(Math.random() * 10);
console.log( n, arr[n] );