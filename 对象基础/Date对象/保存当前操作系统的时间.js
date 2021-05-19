//练习：创建Date对象，保存当前操作系统的时间，获取日期时间，
//打印以下格式     今天是xxxx年xx月xx日 xx时xx分xx秒  星期二
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var date = d.getDate();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var day = d.getDay();//0~6
//用获取的星期的值作为下标就可以找对应的汉字状态
var arr = ['日','一','二','三','四','五','六'];
//console.log( arr[day] );
//如果月份小于10，则在前拼接0
if (month < 10) {
  month = '0' + month;
}
//一般最后都是变量拼接
console.log('今天是'+year+'年'+month+'月'+date+'日 '+
            hour+'时'+minute+'分'+second+'秒 星期'+arr[day]);
