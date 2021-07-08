function erya() {
    //                赠两个门  正确  出错
    return new Promise(function(door,err) {
        var bang="接力棒";
        console.log(`erya拿着 ${bang} 起跑...`);
        setTimeout(function() {//异步
            //用随机数模拟出错的概率
            var r=Math.random();//0~1
            //假设r<0.6 60% 可以正常执行
            //如果没有摔倒
            if (r < 0.6) {
                console.log(`erya拿着 ${bang} 到达终点!`);
                //之后，主动调用door开门！
                door(bang);//自动执行.then()中串联的下一项任务
            } else {//否则如果摔倒了r>0.4 40%
                //走错误处理的门
                err("erya摔倒了！退赛！")
            }
        }, 6000)
    })
}
function yuan(bang2) {//异步
    //bang2=erya中door()给的"接力棒"
    return new Promise(function(door, err) {
        console.log(`yuan拿着 ${bang2} 起跑...`);
        setTimeout(function() {
            var r = Math.random();
            if (r<0.6) {
                console.log(`yuan拿着 ${bang2} 到达终点！`);
                door(bang2); //通知.then中串联的下一项任务可以开始执行!
            } else {
                //走错误处理的门
                err("yuan摔倒了！退赛！")
            }
        }, 4000)
    })
}
function bear(bang3){
    //bang3=yuan()中door()传来的"接力棒"
    console.log(`bear拿着 ${bang3} 起跑...`);
    setTimeout(function() {
        console.log(`bear拿着 ${bang3} 到达终点!`)
    }, 2000)
}

erya().then(yuan).then(bear).catch(function(errMsg){
    console.error(errMsg);
})