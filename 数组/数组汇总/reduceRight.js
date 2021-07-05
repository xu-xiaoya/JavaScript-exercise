//从右向左调用
function appendCurrent(previousValue, currentValue) {
    return previousValue +"::"+ currentValue;
}

function reduceRight() {
    var elements = ["abc", "def","123","456"];
    var result = elements.reduceRight(appendCurrent);
    document.write("<br>" + result);
}