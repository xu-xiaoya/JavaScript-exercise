function showResults(value, index, a) {
   console.log(`
    value：${value}
    index：${index}`);
}

//可以forEach遍历使用一个函数方法
var letters = ['a','b','c'];
letters.forEach(showResults);