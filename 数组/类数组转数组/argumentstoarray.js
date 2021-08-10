//希望用arguments代替slice中的this，骗slice帮我们把arguments的内容复制到一个数组中返回!
function add() {
    var arr = Array.prototype.slice.call(arguments);
    // 简写
    // var arr = [].slice.call(arguments);
    return arr.reduce((prev, elem)=>prev+elem);
}
console.log(
    add(1,2,3),
    add(1,2,3,4,5),
)