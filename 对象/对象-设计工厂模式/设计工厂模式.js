//工厂模式是一种创建类型的模式，把对象实例化简单封装在一个函数中，然后通过函数调用
function showColor() {
    alert(this.color);
}
function createCar(sColor, iDoors, iMpg) {
    var oTempCar = new Object();
    oTempCar.color = sColor;
    oTempCar.doors = iDoors;
    oTempCar.mpg = iMpg;
    /*每次都要调用对象时都要创建showColor()，而事实上每个对象都共享这个函数
    oTempCar.showColor = function() {
        alert(this.color);
    };
    所以在工厂函数外定义函数的方法， 然后通过属性指向函数外方法：*/
    oTempCar.showColor = showColor;
    return oTempCar;
}
var oCar1 = createCar("red", 4, 23);
var oCar2 = createCar("blue", 3, 25);
oCar1.showColor();  //"red"
oCar2.showColor();  //"blue"