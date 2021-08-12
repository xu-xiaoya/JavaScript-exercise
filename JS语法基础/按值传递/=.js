//传递的是原始类型的值，在函数中修改新变量,不会影响原变量
var a = 3;
var b = a;
b++;
console.log(a, b);//3,4


//传递的是引用类型的对象，在函数中用新变量修改对象，等效直接修改原对象
var arr = ['1','2','string'];
var arr1 = arr;
arr1.pop();
console.log(arr);//['1', '2']
