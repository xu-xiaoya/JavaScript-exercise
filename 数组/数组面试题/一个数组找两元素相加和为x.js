// 排好序的数组中，两个元素相加和为19的元素组合
var arr = [1,2,4,6,7,11,12,15,17];
//         ↑                   ↑
//         i                   j
for (var i=0,j=arr.length-1; i<j;) {
    if (arr[i]+arr[j] > 19) {
        j--;
    } else if (arr[i]+arr[j] < 19) {
        i++;
    } else {
        console.log(`${arr[i]}+${arr[j]} == 19`);
        i++,j--;
    }
}