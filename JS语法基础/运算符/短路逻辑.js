/*短路逻辑
&&：当第一个条件false不执行第二个条件
||：当第一个条件true不执行第二个条件
*/

//如果满18岁打印’成年人‘
var age = 11;
age >= 18 && console.log('成年人');

age > 2 || console.log(age); 



//短路逻辑赋值
//如果没有执行第二个表达式，就把第一个表达式赋给a
//如果执行到了第二个表达式，就把第二个表达式赋给a
var a = 0||1;//a为1，不是true
var a = 0&&1;//a为0，不是false
console.log(a);

var username;
var res = username||'游客';//游客
console.log(res);
