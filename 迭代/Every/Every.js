//确定数组的所有成员是否满足指定的测试

function CheckIfEven(value, index, ar) {
    document.write(value + '<br/>');
    if (value % 2 == 0) return true;
    else return false;
}

function Every() {
    var numbers = [2,4,5,6,8];
    if (numbers.every(CheckIfEven)) {
        document.write("全为偶数");
    } else {
        document.write("不全为偶数");
    }
}