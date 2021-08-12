//回调函数方法：回调地狱

//            下一项任务
function erya(next) { //异步
    console.log(`erya起跑！`);
    setTimeout(() => {   //异步：在主程序外执行，主程序不会等它执行完
        console.log(`erya到达终点！`);
        // 之后，主动调用下一项任务
        next();
    }, 6000);
}

function feifei(next) { //异步
    console.log(`feifei起跑！`);
    setTimeout(() => {   
        console.log(`feifei到达终点！`);
        // 之后，主动调用下一项任务
        next();
    }, 4000);
}

function bear() { //异步
    console.log(`bear起跑！`);
    setTimeout(() => {   
        console.log(`bear到达终点！`);
    }, 2000);
}
// erya();
// feifei();
// bear();
erya(function() {
    yuan(function(){
        bear();
    });//yuan的next=function(){bear()}
})//erya的next=function(){yuan()}

// 当erya执行完最后一句话，自调用erya的next：function(){yuan()}，函数yuan开始执行
// 当yuan执行完最后一句话，自调用yuan的next：function(){bear()}，函数bear开始执行