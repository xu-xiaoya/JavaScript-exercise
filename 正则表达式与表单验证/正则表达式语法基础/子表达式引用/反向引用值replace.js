var s = "aa11bb22c3d4e5f6";
//\w+：任意连续的字母  \d+：任意连续的数字
var r = /(\w+?)(\d+)/g;
var b = s.replace(r,"$2$1");//颠倒$1$2标识符的位置
alert(b); 					// 返回字符串"11aa22bb3c4d5e6f"