var b1 = true;//字面量
var b2 = new Boolean(1);//构造函数
var b3 = Boolean(1);
console.log(b2, typeof b2); //[Boolean: true] object
console.log(b3);    //true

console.log( Boolean({}) );//true

// !!隐式转换为布尔型
console.log( !!null ); //false