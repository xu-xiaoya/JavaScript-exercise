/*
定义原型：function.prototype
①原型属性将会影响所有实例对象
②构造函数定义了与原型属性同名的本地属性，则本地属性会覆盖原型属性值。（原型属性可作为默认值）
*/
function p(x, y, z) {   //构造函数
    this.x = x;     //声明本地属性并赋值
    this.y = y;
    this.z = z;
}

//修改原型属性：p.prototype.x = 2;  代表所有实例对象的x都变为2
p.prototype.del = function() {  //定义原型方法
    for (var i in this) {   //遍历本地对象，删除实例对象内所有属性和方法
        delete this[i];
    }
}
p.prototype = new p(1,2,3); //实例化构造函数p，并把实例对象传递给原型对象
var p1 = new p(10,20,30);   //实例化构造函数p为p1
alert(p1.x);//10，本地属性x的值
alert(p1.y);//20，本地属性y的值
alert(p1.z);//30，本地属性z的值
p1.del();
alert(p1.x);//1，原型属性x的值
alert(p1.y);//2，原型属性y的值
alert(p1.z);//3，原型属性z的值