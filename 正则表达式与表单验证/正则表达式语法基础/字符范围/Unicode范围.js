//匹配任意ASCII字符
var r = /[\u0000-\u00ff]/g;

//匹配任意双字节的汉字
var r = /[^\u0000-\u00ff]/g;

//数字也可以用Unicode编码表示：
var r = /[\u0030-\u0039]/g;

//匹配任意大写字母
var r = /[\u0041-\u004A]/g;

//匹配任意小写字母
var r = /[\u0061-\u007A]/g;