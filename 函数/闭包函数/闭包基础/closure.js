//定义一个函数，帮小孩儿管理零花钱
//1. 用外层函数包裹要保护的变量和使用变量的内层函数
function mother(){
  var total=1000;
  //2. 在外层函数内部，返回内层函数对象。
  return function(money){
    //从总价中减去本次花的前
    total-=money;
    total-=money;
    console.log(`花了${money}，还剩${total}`);
  }
}
//3. 调用外层函数，用变量接住返回的内层函数对象。
// pay返回的是一个函数
//pay:function(money){
    //total-=money;
    //console.log(`花了${money}，还剩${total}`);
//}
var pay=mother();//妈妈生第一个小孩，临时为小孩包一个红包1，小孩1拿着红包1独立门户

//pay是一个函数，用()才会调用 
pay(100);//剩900

//别人代码中:
total=0;

pay(100);//剩800

var pay2 = mother();//妈妈生第二个小孩，临时为小孩包一个红包2，小孩2拿着红包2独立门户
pay(100);//剩900