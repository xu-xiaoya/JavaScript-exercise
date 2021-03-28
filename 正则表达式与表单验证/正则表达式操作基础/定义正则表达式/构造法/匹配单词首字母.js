/*
\\b\\w代表一个匹配模式
\b：单词的边界
\w：任意ASCII字符
反斜杠表转义字符，为了避免Regular函数误解，必须使用\\代替\！
 */
var r = new RegExp("\\b\\w", "gi"); //构造正则表达式对象
var s = "javascript JAVA";          //字符串直接量
var a = s.match(r);                 //匹配查找
alert(a);                           //返回数组["j","J"];