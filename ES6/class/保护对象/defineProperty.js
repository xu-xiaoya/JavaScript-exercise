"use strict";
class Emp{
    constructor(eid, ename, salary) { //妈妈
        this.eid=eid;//只读
        this.ename=ename;//禁止删除
        this.salary=salary;//禁止for in遍历
        //当程序执行到这里时，正在创建子对象过程中
        //如果在正在创建子对象过程中，想获得正在创建的子对象，保护正在创建的子对象
        //                      传值！
        //                       ↓
        Object.defineProperties(this, {
            //哪些属性: 
            eid:{
                writable:false,
                configurable:false
            },
            ename:{
                configurable:false
            },
            salary:{
                enumerable:false,
                configurable:false
            }
        })
    }
}
var erya=new Emp(1001, "erya", 12000);

//尝试打开eid的writable开关
Object.defineProperty(erya,"eid",{
    writable:true
});//报错: Cannot redefine property: eid
    
//尝试修改eid 
erya.eid=-2;//报错: Cannot assign to read only property 'eid'
    
//尝试删除ename
delete erya.ename;//报错:Cannot delete property 'ename'

//尝试遍历所有属性(包括salary)
for (var key in erya) {
    console.log(`属性名: ${key}, 属性值:${erya[key]}`)
}//虽然可以遍历，但是没有salary