//promise
function erya() { //异步
    // 用new Promise(function(door)) {……}包裹原来的异步函数代码
    //         格子间             门
    return new Promise(function(door){
        console.log(`erya起跑！`);
        setTimeout(() => {   
            console.log(`erya到达终点！`);
            // 在原异步函数的最后一行代码，主动调用door开门
            door();//自动执行.then()中串联的下一项任务
        }, 6000);
    })
}

function yuan() { //异步
    return new Promise(function(door){
        console.log(`yuan起跑！`);
        setTimeout(() => {   
            console.log(`yuan到达终点！`);
            door();
        }, 4000);
    })
}

function bear() { //异步
    console.log(`bear起跑！`);
    setTimeout(() => {   
        console.log(`bear到达终点！`);
    }, 2000);
}

// .then之前必须是格子间对象，之后可以是格子间也可以是函数
erya().then(yuan).then(bear);
// 执行erya的任务，执行完，调用door()开门=>自动执行.then()中的yuan