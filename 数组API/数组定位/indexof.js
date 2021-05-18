//可返回某个指定的字符串值在字符串中首次出现的位置
//searchvalue	必需。规定需检索的字符串值。
//fromindex	可选的整数参数。规定在字符串中开始检索的位置。如省略该参数，则将从字符串的首字符开始检索。
var ar = ["ab","cd","ef","ab","cd"];

console.log("cd index：" + ar.indexOf("cd"));//1
console.log("cd index from 2：" + ar.indexOf("cd", 2));//4
console.log("gh index ：" + ar.indexOf("gh"));//-1
console.log("ab index from -2：" + ar.indexOf("ab",-2));//3