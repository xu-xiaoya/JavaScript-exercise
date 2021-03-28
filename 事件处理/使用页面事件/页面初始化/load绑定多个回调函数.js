window.onload = function () {
    f1();
    f2();
}
function f1() {
    alert("f1()");
}
function f2() {
    alert("f2()");
}

//下例将会覆盖，最终只有一个回调函数被调用
window.onload = f1;
function f1() {
    alert("f1()");
}

window.onload = f2;
function f2() {
    alert("f2()");
}

//事件注册方式
if (window.addEventListener) {
    window.addEventListener("load", f1, false);
    window.addEventListener("load", f2, false);
} else {
    window.atttachEvent("onload", f1);
    window.atttachEvent("onload", f2);
}