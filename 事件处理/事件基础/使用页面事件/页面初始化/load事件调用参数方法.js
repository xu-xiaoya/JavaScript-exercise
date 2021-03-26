//一、在body元素中通过事件属性的的形式调用函数
<body onload = "f('Hi')">
<script>
function f(a) {
    alert(a)
}    
</script>    
</body>

//二、函数嵌套或闭包函数
//2.1函数嵌套
window.onload = function () {
    f("Hi");    //调用函数
}
function f(a) { //被处理函数
    alert(a);
}
//2.2闭包函数：返回一个函数
window.onload = f("Hi");
function f(a) {
    return function () {
        alert(a);
    }
}