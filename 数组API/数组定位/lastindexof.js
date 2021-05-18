//可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
//lastIndexOf(searchvalue, fromindex2)
//searchvalue	必需。规定需检索的字符串值。
//fromindex	可选。规定在字符串中开始检索的位置。如省略，则将从字符串的最后一个字符处开始检索。
var ar = ["ab","cd","ef","ab","cd"];

console.log("cd index：" + ar.lastIndexOf("cd"));            //4
console.log("cd index from 2：" + ar.lastIndexOf("cd", 2));  //1
console.log("gh index ：" + ar.lastIndexOf("gh"));           //-1
console.log("ab index from -3：" + ar.lastIndexOf("ab",-3)); //0