// 定时器，宏任务
setTimeout(()=>{
    console.log('a')
},0);
var p = new Promise(resolve => {
    //直接写在new Promise中的代码属于主程序，立即执行
    console.log('b');
    setTimeout(()=>console.log('f'),0); //定时器，异步
    resolve();//自动调用.then()中的代码
});


p.then(()=>console.log('c'));// 微任务回调
p.then(()=>console.log('d'));// 微任务回调

console.log('e');   //主程序

// 先主程序->微任务->宏任务
//结果： b e c d a f