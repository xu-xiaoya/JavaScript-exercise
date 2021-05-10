/*短路逻辑
&&：当第一个条件false不执行第二个条件
||：当第一个条件true不执行第二个条件
*/

//如果满18岁打印’成年人‘
var age = 11;
age >= 18 && console.log('成年人');

age > 2 || console.log(age); 