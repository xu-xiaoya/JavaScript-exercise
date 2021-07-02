o = {
    x : 1,
    y : 2,
    z : 3
}
//一、点运算符
console.log(o.y);

//二、数组形式中括号
//以数组形式读取对象属性值时，应以字符串形式指定属性名，而不使用标识符
console.log(o["y"]);

//三、for/in遍历
for(var i in o) {
    //i 代表属性名
    //对象[i]   属性名对应的属性值
    console.log(i, o[i]);
}

//删除属性
delete o.x;