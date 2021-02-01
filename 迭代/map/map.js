//对每个元素调用回调函数，返回包含结果的数组
function AreaOf(radius) {
    var area = Math.PI * (radius*radius);
    return area.toFixed(0);
}

function Map() {
    var radii = [10,20,30];
    var areas = radii.map(AreaOf);
    document.write(areas);
}