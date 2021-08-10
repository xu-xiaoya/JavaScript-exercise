// 将查询字符串转成对象
var str = "?uname=dingding&upwd=123456&favs=swimming&favs=running&favs=basketball";

function searchobj(str) {
    var obj = {};
    str = str.slice(1);//截掉问号
    //按&切割
    var arr = str.split('&');
    // 遍历arr中每个子字符串
    for (var s of arr) {
        // 按= 切割每个子字符串，然后将切割后的第一部分保存在变量key中，将切割后第二部分保存在变量value中
        var [key,value] = s.split('=');
        // 如果obj中不包含key为下标的属性，强行给obj添加下标属性，并赋值
        if (obj[key]===undefined) {
            obj[key] = value;
        } else { 
        // 否则如果已包含key为下标的属性，就取出key的值和新值value拼接新数组，再放回obj中key保存
            obj[key] = [].concat(obj[key],value);    
        }
    }
    return obj;
}
var obj = searchobj(str);
console.log(obj);