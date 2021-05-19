//var a = 1；//语法错误
//console.log(tao);//引用错误
/*
fn();//类型错误
var fn = function(){
}

var arr = [1,2,3];
arr.revese()//类型错误

//var arr = new Array(-5);//范围错误

var age = 10;
if(age < 18 || age > 60){
  //自定义错误
  throw '非法的年龄';
}
*/
var age = 10;
try{
  //尝试执行，可能产生错误，一旦出现错误，不再影响后续代码执行
  if(age < 18 || age > 60){
    //自定义错误
    throw '非法的年龄';
  }
}catch(err){
  //捕获错误，只有try中出现错误才会执行
  //将try中错误信息放入到形参err
  console.log(err);
  //解决错误
  age = 18;
}

console.log(age);