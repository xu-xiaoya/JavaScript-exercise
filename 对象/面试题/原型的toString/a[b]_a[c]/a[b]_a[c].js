var a = {};
var b = {
    key:"a" //key的值是迷惑人的
};
var c = {
    key:"c"
};

// 所有对象底层都是关联数组，所有关联数组的属性名/下标都是字符串

a[b] = "123";
// b是个对象，隐式转换调用Object原型方法toString()转换为字符串 
// toString() 返回结果：
// b.toString => [object Object]; a["[object Object]"] = 123;
a[c] = "456";
// 同理c.toString => [object Object]; a["[object Object]"] = 456;


// 等价于输出a["[object Object]"] 
console.log(a[b]);