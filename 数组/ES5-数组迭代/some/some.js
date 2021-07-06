// i.如果当前元素判断结果为false，才有必要继续遍历下一个元素。
// 除非所有元素的判断结果都为false，整个some ()才返回false，说明整个数组中所有元素都不符合要求!
// ii．如果当前元素判断结果为true，直接退出循环，整个some得出结论:true,说明数组中包含符合要求的元素!

var arr1=[1,2,3,4,5];

console.log(
arr1.some(
    function(element,index,arr) {
    console.log(`arr1.some()内自动调用了一次回调函数。
    收到:当前元素值=${element},当前下标i=${index},当前数组${arr}。本次返回:${element%2==1}`);
    //只判断当前元素值是不是偶数
    return element%2==1//不能被2整除
    }
));