var db = {
   host:"127.0.0.1",
   port:3306,
   query() {
       console.log(`查询商品列表`);
   },
   login() {
       console.log(`登录`);
   }
}
// 只使用db对象的host和login
// 配对：变量  配对：变量
var {host:host, login:login} = db;

// ES6简写：
//只要变量名和配对的属性名相同，可只写一个，既配对又当变量！
var {host, login} = db;

console.log(host);
console.log(login);