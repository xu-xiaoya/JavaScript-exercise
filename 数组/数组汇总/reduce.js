/*
funtion callbackfn(previousValue,currentValue,currentIndex,array)
previousValue：通过上一次调用回调函数获得的值
currentValue：当前数组元素的值
*/ 
function appendCurrent(previousValue, currentValue) {
    return previousValue +"::" + currentValue;
}
function reduce() {
    var elements = ["abc","def",123,456];
    var result = elements.reduce(appendCurrent);
    document.write(result);//abc::def::123::456
}