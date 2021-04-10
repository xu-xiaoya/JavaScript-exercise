/*substring() 和slice() 方法根据起止下标位置来截取字符串。
第一个参数表示起始下标，
第二个参数表示结束下标。*/

var s  = "http://www.mysite.cn/index.html";
var a = s.indexOf("www");   //获取起始点下标
var b = s.indexOf("/", a);  //获得结束点下标

var c = s.substring(a,b);   //返回字符串www.mysite.cn

var d = s.slice(a,b);       //返回字符串www.mysite.cn


//比较slice和substring区别

/*起始点和结束点的值大小无法确定时，使用 substring() 方法更合适。
如果参数值为负值，slice() 方法能够把负号解释为从右侧开始定位，这与 Array 的 slice() 方法相同。
但是 substring() 方法会视其为无效，并返回空字符串。
*/
var s  = "http://www.mysite.cn/index.html";
var a = s.indexOf("www");   //获取起始点下标
var b = s.indexOf("/", a);  //获得结束点下标

var c = s.substring(-b, -a);//返回空字符串

var d = s.slice(-b, -a);    //返回子字符串mysite.cn