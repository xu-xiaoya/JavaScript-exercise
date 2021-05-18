var str1 = '1'; //字面量
var str2 = new String(1); //构造函数
var str3 = String(1);//'1'
//console.log(str2,typeof str2);
//console.log(str3,typeof str3);、


/*
var arr = ['a','b','c'];
//转字符串
console.log( arr.toString() );
//将任意的数据转字符串
console.log( String(arr) );
*/


//转义字符
var str = 'It\'s a dog';    //It's a dog a
var str2 = 'a\nd';  //  \n 换行
var str3 = 'a\tb';  //  \t 制表符  tab键
console.log(str,str2,str3);

//练习：打印出 'C:\users\web'
console.log('C:\\users\\web');
//C:/users/web
