// 高频时间触发，但n秒内只执行一次，所以节流会稀释函数的执行频率
// 常用于鼠标不断点击触发、监听滚动事件
const throttle = (fn, time) => {
    let flag = true;
    return function() {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, time)
    }
}