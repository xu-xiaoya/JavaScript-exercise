//返回一个对象的字符串表示
function F(x,y) {
    this.x = x;
    this.y = y;
}
var f = new F(1,2);
alert(F.toString());//返回函数源代码
alert(f.toString());//返回“[object Object]”