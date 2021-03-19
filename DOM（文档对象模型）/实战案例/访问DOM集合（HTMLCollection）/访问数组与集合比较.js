//【示例1】在下面的例子中，将一个集合coll 复制到数组arr 中，然后比较每次迭代所用的时间。
function toArray(coll) {
    for(var i = 0, a = [], len = coll.length; i < len; i++) {
        a[i] = coll[i];
    }
    return a;
}
var coll = document.getElementsByTagName('div');
var ar = toArray(coll);
function loopCollection() {//比较慢
    for (var count = 0; count < coll.length; count++) {
    }
}
function loopCopiedArray() {//比较快
    for (var count = 0; count < arr.length; count++) {
    }
}