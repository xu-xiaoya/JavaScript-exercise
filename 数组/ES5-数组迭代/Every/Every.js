//every内部自带for循环，接到回调函数返回的判断结果后，再决定是否继续遍历下去
//确定数组的所有成员是否满足指定的测试

var arr1=[1,2,3,4,5];//false
var arr2=[2,4,6,4,2];//true
//                         当前元素值 下标 数组
//                               ↓    ↓   ↓
var result1=arr1.every(function(elem, i, arr) {
    console.log(`arr1.every()自动调用一次回调函数，
    elem=${elem},i=${i},arr=${arr},返回判断结果:${elem%2==0}`);
    return elem%2==0
})
var result2=arr2.every(function(elem, i, arr){
    console.log(`arr2.every()自动调用一次回调函数，
    elem=${elem},i=${i},arr=${arr},返回判断结果:${elem%2==0}`);
    //判断当前元素是否是偶数
    return elem%2==0
})
console.log(result1, result2);//false,true