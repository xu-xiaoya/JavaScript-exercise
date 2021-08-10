var liang="liang" ;
liang.money=10;
// new String(liang).money=10 //没用变量接住，调用后自动释放!
console.log(liang.money);//undefined
// new String(liang).money


// 正确写法
var liang = new String("liang");
liang.money = 10;
console.log(liang.money);