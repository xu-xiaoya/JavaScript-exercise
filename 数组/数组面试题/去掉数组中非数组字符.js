// 1.去掉数组中非数字字符，并给数字+1
var arr = [1,2,3,'a',4,'b'];
// 只要修改数组元素，就要从后向前遍历
for (var i = arr.length-1; i >= 0; i--) {
    if (typeof arr[i] === 'number') {
        arr[i]++;
    } else {
        arr.splice(i,1);
    }
}
console.log(arr);