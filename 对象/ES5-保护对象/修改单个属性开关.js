var erya={
    eid:1,
    ename:"二雅",
    salary:1022
}

// 修改单个属性开关
/*
只要修改writable和enumerable两个开关时，同时修改configurable:false，
阻止别人的程序重新打开我们关闭的开关。（configurable:false，不可逆）
*/ 
Object.defineProperty(erya, "eid",
    // eid禁止修改——只读
    { 
        writable:false,
        configurable:false //双保险
    }
})

// 修改多个属性开关
Object.defineProperties(erya,{
    // ename禁止删除
    ename:{
      configurable:false
    },
    //salary禁止随意用for in循环遍历
    salary:{
      enumerable: false, //半隐藏
      configurable:false
    }
})
