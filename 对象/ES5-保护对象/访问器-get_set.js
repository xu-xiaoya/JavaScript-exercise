var erya={
    ename:"二雅",
    eage:20
}
//eage可修改,18~65

//1. 定义小黑屋属性，转移原对象中原eage属性值
Object.defineProperty(erya,"小黑屋",{
    value:erya.eage,
    writable:true,
    enumerable:false,
    configurable:false
})

//2. 定义访问器属性替身+2保镖
Object.defineProperty(erya,"eage",{
    //访问器属性自己不存值，只提供保护，所以没有value属性

    // 保镖一：
    get:function() {
        console.log(`eage自动调用了自己的get()，返回${this.小黑屋}给外部`)
        //this->访问器属性eage所在的当前对象->eric
        return this.小黑屋;
    },
    set:function(value) {
        console.log(`eage自动调用了自己的set()，接收外部传入的新值${value}`);
        if (value>=18&&value<=65) {
            this.小黑屋=value;
        } else {
            throw Error("年龄超范围！");
        }
    },
    
    //正是因为writable不好用，我们才被迫用访问器属性代替writable，所以用了get/set，就不用writable。
    //因为替身必须替真实属性抛头露面，所以，必须可以被for in发现
    enumerable:true,
    //因为替身不能随意删除
    configurable:false
})

//外界试图获得erya的eage值
console.log(erya.eage);
//外界试图修改erya的eage属性
erya.eage=26;
//外界试图获得erya的eage值
console.log(erya.eage);
//外界试图修改erya的eage属性
erya.eage=-2;//抛出异常