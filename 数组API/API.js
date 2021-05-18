//reverse翻转数组元素
var arr = ['a','b','c','d'];
arr.reverse();
console.log(arr);



//sort排序
var arr = [23,9,78,6,45];
//默认按照编码排序
//arr.sort();
//回调函数
arr.sort( function(a,b){
  //console.log(a,b);
  //return a-b; //从小到大排序
  return b-a; //从大到小排序 
} );
console.log(arr);



//concat拼接多个数组
//concat(arr2,arr3...) arr2,arr3表示要拼接的数组，返回拼接后的数组是一个新的数组
var arr1 = ['a','aa','aaa'];
var arr2 = ['b','bb','bbb'];
var arr3 = ['c','cc','ccc'];
console.log( arr1.concat(arr2,arr3) );//['a', 'aa', 'aaa','b', 'bb', 'bbb','c', 'cc', 'ccc']



//slice截取数组元素  
//两参数时，左闭右开
//只有一个参数，截到最后
//下标是负数表示倒数
var arr = ['a','aa','aaa','b','bb','bbb','c','cc','ccc'];
console.log( arr.slice(2) );      //['aaa', 'b', 'bb', 'bbb', 'c', 'cc', 'ccc']
console.log( arr.slice(2,4) );    //['aaa', 'b']
console.log( arr.slice(-3,-1) );  //['c', 'cc']

//练习：创建数组包含a~f，每个字母是一个元素；分别截取bc，ef；最后再将这两组拼接成一个新数组。
var arr = ['a','b','c','d','e','f'];
var arr1 = arr.slice(1,3);
var arr2 = arr.slice(-2);
//console.log(arr1,arr2);
console.log( arr1.concat(arr2) );



//删除数组元素
/*
splice(start, count, v1,v2...)
①
第一个参数操作的起始下标位置
第二个参数删除元素的个数
第三个及后参数将要插入的元素
②
删除和插入操作同时进行，同时在该位置操作
*/
var arr =  ['a','aa','aaa','b','bb','bbb','c','cc','ccc'];
//console.log( arr.splice(1) );      //['a']

//console.log(arr.splice(1,2) );     //['aa','aaa']
//console.log(arr);                  //['a','b','bb','bbb','c','cc','ccc']

console.log(arr.splice(-4,0,'d','dd','ddd') );  //[]
console.log(arr);       //['a','aa','aaa','b','bb','bbb','c','cc','ccc','d','dd','ddd']

//console.log(arr.splice(-3,1,'tihuan')); //['c']
//console.log(arr);                       //['a','aa','aaa','b','bb','bbb','c','cc','ccc'];