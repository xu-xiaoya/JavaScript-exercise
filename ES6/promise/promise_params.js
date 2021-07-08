function erya() {
    return new Promise(function(door) {
        var bang="接力棒";
        console.log(`erya拿着 ${bang} 起跑...`);
        setTimeout(function() {//异步
            console.log(`erya拿着 ${bang} 到达终点!`);
            door(bang);//传入接力棒
        }, 6000);
    })
}
function yuan(bang2) {//异步
    //bang2=erya中door()给的"接力棒"
    return new Promise(function(door) {
        console.log(`yuan拿着 ${bang2} 起跑...`);
        setTimeout(function() {//异步
            console.log(`yuan拿着 ${bang2} 到达终点！`);
            door(bang2); //通知.then中串联的下一项任务可以开始执行!
        }, 4000)
    })
}
function bear(bang3) {//异步
    //bang3=bear()中door()传来的"接力棒"
    console.log(`bear拿着 ${bang3} 起跑...`);
    setTimeout(function() {
        console.log(`bear拿着 ${bang3} 到达终点!`)
    }, 2000)
}

erya().then(yuan).then(bear);