// setTimeout也会在主程序后执行：
for (var i = 0; i < 3; i++) {
    setTimeout(
        function() {//异步，回调函数
            console.log(i)//3 3 3
        }
    ,50);
}
console. log("循环结束");
console.log ( "i="+i);//3
    
// 解决：
// ①let
for (let i = 0; i < 3; i++) {
    setTimeout(
        function() {//异步，回调函数
            console.log(i) //0 1 2
        }
    ,50);
}
// ②匿名函数自调，闭包
for (var i = 0; i < 3; i++) {
    (function(i){
        setTimeout(
            function() {//异步，回调函数
                console.log(i) //0 1 2
            }
        ,50);
    })(i)
}