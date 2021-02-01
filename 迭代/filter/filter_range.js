var CheckNumericRange = function(value) {
    if (typeof value !== 'number') {
        return false;
    } else {
        return value >= this.minimum && value <= this.maximum;
    }
}
function filter_range() {
    var numbers = [6,12,"15",16,"the", -12];
    var obj = {minimum:10, maximum:20}
    var result = numbers.filter(CheckNumericRange, obj);
    document.write( '<br>'+ result);
}
