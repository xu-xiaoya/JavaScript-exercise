//==等于，只是比较值是否相同，可能发送隐式转换
//===全等于，先比较类型类型，再比较值
//!=不等于，比较值不等于
//!==不全等于，类型不同或者值不同
console.log(2=='2');//true
console.log(2==='2');//false

console.log(1==true);//true
console.log(1==='true');//false

console.log(undefined == null);//true
console.log(undefined === null);//false

console.log(NaN == NaN);//false
