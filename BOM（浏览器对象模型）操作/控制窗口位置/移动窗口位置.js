/*
moveTo：接受的是新位置的x和y坐标值
moveBy：接受的是在水平和垂直方向上移动的像素数

两个方法都不适用框架，只能适用最外层window对象
*/
window.moveTo(0,0);     //将窗口移动到屏幕左上角
window.moveBy(0,100);   //将窗口向下移动100像素
window.moveTo(200,300)  //将窗口移动到（200,300）新位置
window.moveBy(-50,0)    //将窗口向左移动50像素