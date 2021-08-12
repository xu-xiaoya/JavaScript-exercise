//set类型的对象:值不允许重复的集合
//向set类型对象中添加新值时，如果set中没有这个新值，才能添加进去，如果set中已经有这个新值了，则不再添加
function unique(arr) {
    //将原数组arr放入一个new Set对象中，利用它不重复值的特点自动去重
    var set = new Set(arr);
    //set打散之后，放入新数组中
    var newArr = [...set];
    return newArr;
}


// arr = [1,1,2,6,3,5,8,0,3];
var arr = [];
for (var i = 0; i < 10000; i++) {
    arr.push(parseInt(Math.random()*10000));
}

console.time("unique"); //开始计时
var newArr = unique(arr);
console.timeEnd("unique"); //结束计时并显示执行时间

console.log(newArr);