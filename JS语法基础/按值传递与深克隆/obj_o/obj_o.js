function fun(o){
    o.name="西西";

    // {}=> new Object(); []=> new Array(); function =>new Function()
    o={};
    o.name="小丽";
}
var obj = {
    name:"小红",
    age:11
};
// 两个变量间赋值时，其实是原变量中的值复制一个副本给对方中
// 这里指obj地址的副本复制给形参o
fun(obj);
console.log(obj);
