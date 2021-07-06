/*
funtion callbackfn(previousValue,currentValue,currentIndex,array)
previousValue：通过上一次调用回调函数获得的值
currentValue：当前数组元素的值
*/ 
function appendCurrent(previousValue, currentValue) {
    return previousValue +"::" + currentValue;
}

var elements = ["abc", "def","123","456"];
function reduce() {
    var result = elements.reduce(appendCurrent);
    console.log(result);//abc::def::123::456
}
reduce();
//从右向左调用
function reduceRight() {
    var result = elements.reduceRight(appendCurrent);
    console.log(result);
}
reduceRight();