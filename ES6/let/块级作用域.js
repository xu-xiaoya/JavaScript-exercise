//块级作用域
{
    var c = 3;
    let d = 4;//局部变量
    const e = 5;//局部常量
}
console.log(d);//报错
console.log(e);//报错