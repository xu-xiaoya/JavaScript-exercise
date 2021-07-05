//创建Date对象
var d1 = new Date('2021/5/18 10:27:30');
var d2 = new Date(2021,4,18,10,27,30);//月份0~11 1月~12月
var d3 = new Date();//当前操作系统时间
//距离计算机元年的毫秒数
var d4 = new Date(1608336000000);
console.log(d4);


var d = new Date('2021/5/16 10:56:30');
//获取年
console.log( d.getFullYear() );
console.log( d.getMonth()+1 );//0~11  对应1~12月
console.log( d.getDate() );
//Hours  Minutes  Seconds
console.log( d.getHours() );
console.log( d.getDay() );// 0~6  星期日~星期六
console.log( d.getTime() );//获取距离计算机元年毫秒数