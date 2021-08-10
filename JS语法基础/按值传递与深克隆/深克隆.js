// 浅克隆:只克隆第一级属性，如果某个属性又是一个内嵌的子对象，不会进入子对象中克隆子对象的内容
// 深克隆:既可用第一级属性，如果某个属性又是一个内嵌的子对象，深克隆会进入子对象中，继续克隆子对象及其内容


function deepClone(oldObj){
  if(oldObj==null){ 
    return null;
  }
  if(typeof oldObj!=="object"){
    return oldObj;
  }
  var newObj=Array.isArray(oldObj)?[]:{};
  for(var key in oldObj){
    newObj[key]=deepClone(oldObj[key]);
  }
  return newObj;
}
var a1=10;
var arr1=[1,2,3];
var lilei1={
  sname:"Li Lei",
  sage:11,
  address:{
    city:"北京",
    street:"万寿路"
  }
}
var a2=deepClone(a1);
console.log(a2);

var arr2=deepClone(arr1);
console.log(arr2);
console.log(arr1==arr2);//false

var lilei2=deepClone(lilei1);
console.log(lilei2);
console.log(lilei1==lilei2);//false
console.log(lilei1.address==lilei2.address)//false
