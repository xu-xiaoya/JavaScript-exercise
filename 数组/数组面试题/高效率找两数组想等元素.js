// 在两个排好序的数组中，高效率的找出相同的元素，放入新数组
var arr1 = [1,3,7,9,12,37,45];
//          ↑
//          i →
var arr2 = [2,4,9,13,45,88,92];
//          ↑
//          j →
// 两个变量从两个数组的头部开始比较，谁的值小就往右移1，相等则放入新数组，两个皆往右移1
var i = 0, j = 0;
for (var i=0,j=0,result=[]; i<arr1.length&&j<arr2.length;) {
    if (arr1[i] < arr2[j]) {
        i++;
    } else if (arr1[i] > arr2[j]) {
        j++;
    } else {
        result.push(arr1[i]);
        i++,j++;
    }
}
console.log(result);