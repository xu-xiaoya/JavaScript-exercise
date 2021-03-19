//【示例2】当每次迭代过程访问集合的length 属性时，将会导致集合器更新，在所有浏览器上都会产生明显的性能损失。
//优化的办法很简单，只要将集合的length属性缓存到一个变量中，然后在循环判断条件中使用这个变量。
function loopCacheLengthCollection() {
    var coll = document.getElementsByTagName('div'),
    len = coll.length;
    for (var count = 0; count < len; count++) {
    }
}
