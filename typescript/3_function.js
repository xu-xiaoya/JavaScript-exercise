"use strict";
function intr(str) {
    return "\u6211\u7684\u81EA\u6211\u4ECB\u7ECD" + str;
}
console.log(intr("you can you up"));
// intr(); //报错
// intr(100);   //报错
// ?可以不传参
function intr2(str) {
    if (str === undefined) {
        str = "主人很懒，啥也没写";
    }
    console.log("\u6211\u7684\u81EA\u6211\u4ECB\u7ECD" + str);
}
intr2();
//默认值
function intr3(str) {
    if (str === void 0) { str = "主人很懒，啥也没写"; }
    console.log("\u6211\u7684\u81EA\u6211\u4ECB\u7ECD" + str);
}
intr3();
function add() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (box, val) { return box + val; }, 0);
}
console.log(add(1, 2, 3));
