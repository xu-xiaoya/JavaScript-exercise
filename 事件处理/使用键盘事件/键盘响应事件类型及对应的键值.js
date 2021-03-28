<textarea id = "key"></textarea>
var key = document.getElementById("key");
key.onkeydown = f;      //注册keydown事件处理函数
key.onkeyup = f;        //注册keyup事件处理函数
key.onkeypress = f;     //注册keypress事件处理函数

function f(e) {
    var e = e || window.event;
    var s = e.type + " " +e.keyCode;    //获取键盘事件类型和按下的键码
    key.value = s;
}