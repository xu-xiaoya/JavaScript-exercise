var s = "JavaScript 中国";
s = encodeURI(s);  //URI编码
console.log(s);  //返回字符串“JavaScript%E4%B8%AD%E5%9B%BD”

// decodeURI() 方法可以对 encodeURI() 方法的结果进行解码。
s = decodeURI(s);  //URI解码
console.log(s);  //返回字符串“JavaScript 中国”