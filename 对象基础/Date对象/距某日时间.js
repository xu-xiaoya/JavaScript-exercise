//距离2021/6/7还有x天x小时x分x秒
//创建当前时间的对象
var d1 = new Date();
//创建对象，保存2021/6/7
var d2 = new Date('2021/6/7');
//计算两者相差的毫秒数
var d = d2.getTime() - d1.getTime();
//两个对象直接相减得到的是相差的毫秒数
//console.log(d2-d1);
//将相差的单位由毫秒变为秒
//向下取整，去除小数点后的部分
d = Math.floor(d/1000);
//去除相差的值中含有的分钟，剩下的值就是不满一分钟，得到秒的部分
var second = d%60;//结果不满60秒
//计算相差的分钟部分，去除相差的值中含有的小时，剩下的值不满一小时，得到分钟部分
var minute = d%3600;
//换算为分钟
minute = Math.floor( minute/60 );
//计算相差的小时部分，去除相差的值中含有的天，剩下的值不满一天，得到小时部分
var hour = d%(24*3600);
//换算为小时
hour = Math.floor( hour/3600 );
//计算相差的天部分，直接换算为天
var day = Math.floor( d/(24*3600) );
console.log( '距离2021年高考还有'+day+'天'+hour+'小时'+minute+'分'+second+'秒' );