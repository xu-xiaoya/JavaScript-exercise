//1.原始类型的存储：栈内存
var a = 1;
//把a的值赋给了b
//拷贝一份a的值赋给b，a和b都是独立的
var b = a;
//给a重新赋值，不会影响b
a = 2;
console.log(a,b);


//2.引用类型存储：堆内存
var tao = {
  color: '绿色',
  size: 'XXL'
};
//把对象的地址拷贝一份赋给了dong
//两个变量指向的是同一个对象
var dong = tao;
dong.color = '红色';
tao.size = 'XXXL';
console.log(dong);  //{color：'红色', size:'XXXL'}
console.log(tao);   //{color：'红色', size:'XXXL'}

//比较的是地址是否相同
console.log( dong === tao );
//null 空地址，不指向任何的对象
//赋值为null，不再指向对象，对象就会自动销毁
dong = null;
tao = null;

var p1 = {n1: 1, n2: 2};
var p2 = {n1: 1, n2: 2};
//两个对象的地址不同
console.log(p1 === p2);