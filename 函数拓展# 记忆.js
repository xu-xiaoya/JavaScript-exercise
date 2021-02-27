//记忆函数memoizer
var memoizer = function(memo, formula) {//初始memo数组、一个计算值的函数
    var recur = function(n) {
        var result = memo[n];
        if (typeof result !== 'number') {   //在memo数组中未找到值时
            result = formula(recur, n);   //用formula函数计算n对应的值
            memo[n] = result;   //并记录在memo数组中
        }
        return result;
    };
    return recur;
}

//示例一   memoizer函数的两个参数：[0,1]初始数组， function(recur, n) {……}为计算值的函数
var fibonacci = memoizer([0,1], function(recur, n) {
    return recur(n-1)+recur(n-2);
});

//示例二   
var factorial = memoizer([1,1], function(recur, n) {
    return n*recur(n-1);
});
