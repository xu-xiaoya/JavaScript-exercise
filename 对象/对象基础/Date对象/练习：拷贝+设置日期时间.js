//练习：创建Date对象，保存'2021/5/20'，作为入职时间；拷贝入职时间的对象作为到期时间，设置合同期为3年(3年后)；分别打印两个对象的本地字符串格式。
//拷贝到期时间对象作为续签时间，提前一个月进行续签，如果是周末提前到周五，打印续签时间的本地字符串格式
//入职时间
var d1 = new Date('2021/5/20');
//到期时间
var d2 = new Date(d1);
//设置合同期为3年
d2.setFullYear( d2.getFullYear()+3 );
//拷贝到期时间对象，作为续签时间对象
var d3 = new Date(d2);
//提前一个月
d3.setMonth( d3.getMonth()-1 );
//判断是否为周末
var day = d3.getDay();
console.log(day);
if(day === 6){ //周六
  //提前一天
  d3.setDate( d3.getDate()-1 )
}else if(day === 0){
  //提前两天
  d3.setDate( d3.getDate()-2 );
}
console.log('入职时间：' + d1.toLocaleDateString());
console.log('到期时间：' + d2.toLocaleDateString());
console.log('续签时间：' + d3.toLocaleDateString());