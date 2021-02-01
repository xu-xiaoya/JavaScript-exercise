//返回一个 调用回调函数返回值为true 的所有值的新数组
function CheckIfEven(value,index, ar) {
    high = Math.floor(Math.sqrt(value) + 1);
    for (var div = 2; div <= high; div++) {
        if (value % div == 0) {
            return false;
        } 
    }
    return true;
}
function  Filter_prime() {
    var numbers = [31,33,35,37,39,41,43,4565,47,49,51,53];
    var prime = numbers.filter(CheckIfEven);
    document.write(prime);
}