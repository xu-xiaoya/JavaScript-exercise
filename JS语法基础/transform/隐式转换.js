/*
加号(+)的作用
(1)加法运算
(2)字符串之间的拼接
*/

//隐式转换为数值自动的调用函数Number()

//(1)数字+字符串    数字转为字符串
2 + '1'  //'21'

//(2)数字+布尔型    布尔型转为数值  true-1  false-0
1+true   //2
1+false  //1

//(3)字符串+布尔型  布尔型转为字符串
'5'+true  //'5true'


var a = 2, b = true, c = 'tedu';
console.log(a+b+c); //'3tedu'
console.log(b+c+a); //'truetedu2'
console.log(c+a+b); //'tedu2true'

//NaN：Not a Number，不是一个数字，是在将数据转数值的时候失败的结果，和任何的值执行数学运算结果还是NaN