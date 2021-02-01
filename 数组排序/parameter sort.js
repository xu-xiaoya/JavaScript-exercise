function f1(a, b) {//降序排序
    if (a < b) {//若a<b,则掉换位置
        return 1;
    } else {
        return -1;//否则保持不动
    }
}
function f1_sort() {
    var a = ["aB","Ab","Ba","bA"];
    a.sort(f1);
    document.write("降序排序：" + a + "<br/>");
}


function f2(a, b) {//分离浮点数和整数排序
    if (a > Math.floor(a)) return 1;
    if (b > Math.floor(b)) return -1;
}
function f2_sort() {
    var a = [3.545555,1.265465,3,2.1111,7];
    a.sort(f2);
    document.write("分离浮点数与整数：" + a);
}