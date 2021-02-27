/*
属性特性：
A.可写：是否可设置该属性的值
B.可枚举：是否可以通过for/in循环返回该属性
C.可配置：是否可以删除或修改
*/

//结构体外定义属性：
var o = {}
o.x = 1;

/*①属性添加到对象或修改现有属性特性：
Object.defineProperty(object, propertyname, descriptor)
object:必需，指定要添加或修改属性的对象
propertyname：必需，一个包含属性名称的字符串
descriptor：必需，描述了数据属性或访问器属性的特性
*/
var obj = {};
Object.defineProperty(obj, "newDataProperty", {
    value : 101,
    writable : true,
    enumerable : true,
    configurable : true
});
obj.newDataProperty = 102;
document.write(obj.newDataProperty);//102


/*②多个属性添加到对象或修改多个现有属性特性：
Object.defineProperties(object, descriptors)
object:必需，对其要添加或修改属性的对象
descriptor：必需，包含一个或多个描述符对象，每个都有数据属性或访问器属性
*/
var obj = {};
Object.defineProperties(obj, {
    newDataProperty : {
        value : 101,
        writable : true,
        enumerable : true,
        configurable : true
    },
    newAccessorProperty : {
        set : function(x) {
            this.newaccpropvalue = x;
        },
        get : function() {
            return this.newaccpropvalue;
        },
        enumerable : true,
        configurable : true
}});
obj.newAccessorProperty = 10;
document.write(obj.newAccessorProperty);//10