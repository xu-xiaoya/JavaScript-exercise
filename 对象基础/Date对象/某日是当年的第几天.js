//创建函数，传递任意一个日期，返回这一天是一年中的第几天
//例如  getDays(2021,5,18)
function getDays(year,month,date) {
    //计算当前日期距离这一年的1月1日相差的毫秒数
    var d1 = new Date(year,month-1,date+1);
    var d2 = new Date(year,0,1);
    var d = d1 - d2;
    //相差的值换算为天
    return d/(24*60*60*1000);
  }
  console.log( getDays(2021,5,18) );