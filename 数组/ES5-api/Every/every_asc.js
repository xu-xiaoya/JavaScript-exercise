var arr1 = [1,2,3,4,5];
var arr2 = [2,4,6,3,5];

var fun = function(ele, i, arr) {
    // 最后一个元素前的所有比较为true即可，最后一个元素不进行比较(a[length]:NaN)
    return i < arr.length-1 ? ele <arr[i+1]:true;
}
var bool1 = arr1.every(fun);
console.log(bool1);

var bool2 = arr2.every(fun);
console.log(bool2);