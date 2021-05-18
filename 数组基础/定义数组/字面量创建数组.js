//字面量创建数组

var emps = ['tao','dong','hua',10,true];
//console.log(emps);
//创建数组，包含有一组成绩
var score = [80,97,63,78];
//console.log(score);
//练习：创建数组，包含有一组商品的名称
var laptop = ['小米Air','Apple Air','外星人'];
//console.log(laptop);
//下标：自动为每个元素添加的编号，从0开始
//console.log( laptop[4] );
laptop[2] = 'ThinkPad';
laptop[3] = '戴尔';
laptop[5] = '华为';
//console.log(laptop)

//练习：创建数组，保存一组汽车的品牌名称，修改其中的元素，在末尾添加若干元素，打印数组。
var car = ['长城','五菱宏光','比亚迪','蔚来'];
car[1] = '特斯拉';
car[3] = '劳斯莱斯';
//使用当前数组长度作为下标
car[car.length] = '吉利';
car[car.length] = '丰田';
car[car.length] = '本田';

//console.log( car.length );
//console.log(car);
//console.log(typeof car);
//练习：创建一个空数组，使用数组的长度属性不断添加元素。
var arr = [];
arr[arr.length] = 'a';
arr[arr.length] = 'b';
arr[arr.length] = 'c';
console.log(arr);





