var n1 = 1;//字面量
var n2 = new Number(true);  //构造函数
var n3 = Number(true);      //普通函数
console.log(n2, typeof n2); //[Number: 1] object    
console.log(n1 + 2, n2 + 2);//3 3
console.log(n3);            //1



var n = 2 * 3.14 * 5;
//保留小数点后n位
console.log( n.toFixed(1) );//31.4

var total = 6988*2 + 5199*3;
//给整数保留小数点后n位
console.log( total.toFixed(2) );//29573.00



var num = 10;
//转为字符串，可以设置显示的进制
console.log( num.toString(16) );