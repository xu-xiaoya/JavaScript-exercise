//1. for-in
var a = [1, 2, true, "m"];
for (var k in a) {
  //k 代表下标
  //arr[k]  元素
  console.log(k, a[k]);
}

//2. 循环
var arr = ['tao','dong','tom','king','jerry','lucy'];
//循环下标的范围0~3
//使用for循环遍历数组
for (var i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}