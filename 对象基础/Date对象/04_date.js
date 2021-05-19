var d = new Date();
console.log(d);

//转为本地字符串
console.log( d.toLocaleString() );
console.log( d.toLocaleDateString() );
console.log( d.toLocaleTimeString() );



//拷贝Date对象
var d = new Date('2021/5/18 14:58:30');
var d2 = new Date(d);
//修改年份
//d.setFullYear(2024);
//月份
//d.setMonth(12);
//setDate
//设置为1周前：获取当前的日期后，然后减7，把结果作为要修改的值
d.setDate( d.getDate()-7 );
//设置为3小时后
d.setHours( d.getHours()+3 );



//设置距离计算机元年的毫秒数，产生新的日期时间
d.setTime(1500000000000);

console.log( d.toLocaleString() );
console.log( d2.toLocaleString() );