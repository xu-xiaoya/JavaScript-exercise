// for of 单纯用来简化for循环只要遍历数字下标的东西，都可用`for of`代替
//不关心遍历位置，不需要修改遍历顺序和步调
var arr=["亮亮","楠楠","东东"];
// for(var i=0;i<arr.length;i++){
//    console.log(`${arr[i]}-到!`)
// }
for (var t of arr) {
    console.log(`${t}-到!`)
}

//定义一个函数，求任意多个数字的和
function add(               ) {
    // arguments[               ].length
    //            0 1 2 3 4 5...
    var result=0;
    // for(var i=0;i<arguments.length;i++){
    //   result+=arguments[i]
    // }
    // arguments.forEach(function(n){
    //   result+=n;
    // })
    for(var n of arguments){
        result+=n;
    }
    return result;
}
console.log(add(1,2,3));//6
console.log(add(1,2,3,4,5));//15