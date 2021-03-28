//一、直接为window对象注册页面初始化事件处理函数
window.onload = f;
function f() {
    alert("页面加载完毕！");
}

//二、在页面body标签中定义onload事件处理属性
<body onload = "f()">
<script>
function f() {
    alert("页面加载完毕")
}
</script>
</body>