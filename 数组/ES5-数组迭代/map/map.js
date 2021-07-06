//对每个元素调用回调函数，返回包含结果的数组

// 示例一：
var arr=[1,2,3,4,5];
//希望将原数组中元素值*2，放入新数组中返回，原数组保持不变！
var arr2=arr.map(
    function(ele,i){
        console.log(`arr.map()内自动调用一次回调函数。
        收到当前元素值=${ele},当前下标i=${i}。将${ele}x2后获得新值${ele*2}，放入新数组中${i}位置`)
        return 当前元素值*2
    }
);
console.log(arr);
console.log(arr2);


//示例二：
function AreaOf(radius) {
    var area = Math.PI * (radius*radius);
    return area.toFixed(0);
}

function Map() {
    var radii = [10,20,30];
    var areas = radii.map(AreaOf);
    document.write(areas);
}
Map();