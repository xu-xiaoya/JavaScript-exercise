var erya={ename:"erya"};
var erya1={ename:"erya1"};

// 1、回调函数中的this如果不是想要的，必须用bind来换.
// 1)为什么不能用.call()和 apply()换?,
// 因为.call()和.apply()都是立刻执行函数的意思，而回调函数恰恰不希望立刻执行
// 2)bind()最适合绑定回调函数的this?.
//  bind不是立刻调用，而是返回一个新函数
setTimeout(function(){
    console.log('${this.ename}pia!');
}.bind(erya), 2000);

setTimeout(function(){
    console.log('${this.ename}pia!');
}.bind(erya1), 2000);