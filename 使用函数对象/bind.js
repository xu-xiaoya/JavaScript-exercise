//bind把函数绑定到指定对象上

var checkNumericRange = function (value) {      //原函数，范围上下限根据当前实例对象的minimum和maximum属性决定。
    if (typeof value !== 'number')
        return false;
    else 
        return value >= this.minimum && value <= this.maximum;
}
var range = {minimum:10, maximum:20};           //range对象
var boundCheckNumericRange = checkNumericRange.bind(range);     //将checkNumericRange函数绑定到range对象上
var result = boundCheckNumericRange(12);
document.write(result);//true;