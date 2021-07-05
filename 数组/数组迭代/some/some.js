//按索引顺序对每个元素调用回调函数，直到回调函数返回true

function CheckIfEven(value, index, ar) {
    if (value % 2 == 0) 
        return true;
}
function Some() {
    var numbers = [1,15,4,10,11,22];
    var evens = numbers.some(CheckIfEven);
    if (evens) {
        alert("不全是奇数");
    } else {
        alert("全是奇数");
    }
}