//本例中，函数f2()被调用，而f1被覆盖
<body onload = "f1()">
<script>
window.onload = f2;
function f1() {
    alert('<body onload = "f1()";>')
}
function f2() {
    alert("window.onload = f2;")
}
</script>

</body>