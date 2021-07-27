"use strict";
function pay(x, y) {
    //如果连第一个参数都没传，说明没有传任何参数
    //则执行手机支付
    if (x === undefined) {
        console.log("手机支付");
    }
    else if (y === undefined) {
        //否则如果x传了值，但是y没有传值
        //说明只传了一个参数，要执行现金支付
        console.log("\u73B0\u91D1\u652F\u4ED8\uFF0C\u6536\u60A8" + x + "\u5143");
    }
    else {
        //否则如果两个参数都传了，说明执行刷卡支付
        console.log("\u5237\u5361\u652F\u4ED8\uFF0C\u4ECE\u60A8\u5361\u53F7" + x + "\u4E2D\u6263\u6B3E\u6210\u529F...");
    }
}
pay();
pay(100);
pay("6553 64444", "1230");
