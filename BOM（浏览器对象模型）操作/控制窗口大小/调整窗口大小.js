/*
名称中带To的方法都是绝对的，By都是相对的：

resizeBy():接收的是在当前位置、大小上增加所指定的像素数
resizeTo():窗口新的绝对位置、大小

scrollBy():将窗口中显示的文档向上下左右滚动指定数量的像素
scrollTo():将文档滚到一个绝对位置
*/
window.onload = function() {
    timer = window.setInterval("jump()", 1000);
}
function jump() {
    window.resizeTo(200,200);
    x = Math.ceil(Math.random()*1024);//随机定位窗口在屏幕上的显示位置
    y = Math.ceil(Math.random()*760);
    window.moveTo(x,y); 
}