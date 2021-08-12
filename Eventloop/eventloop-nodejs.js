// nextTick()优先级高于.then()
// nextTick()一定比.then()提前执行
process.nextTick(function() {
    console.log(7); //microTask
});
new Promise(function(resolve){
    console.log(3);//主程序
    resolve();
    console.log(4);//主程序
}).then(function() {
    console.log(5); //microTask
});
process.nextTick(function(){
    console.log(8); //microTask
});

// 3 4 7 8 5