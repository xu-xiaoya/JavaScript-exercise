// 1.将方法挂载到我们传入的obj
// 2.将挂载以后的方法调用
// 3.将我们添加的这个属性删除

// call
Function.prototype.newcall = function(obj = window, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error');
    }
    // 1.给obj添加一个唯一值属性，避免与原有属性冲突
	const fun = Symbol();
    // 2.将方法挂载到obj上
    //    fn.newcall(obj)： .前调用this就指向谁 =》this->函数fn
    //    让this(函数fn)变为obj的一个属性fun,  可通过obj[fun]()直接调用函数。
    obj[fun] = this; 

    // 3.调用挂载在obj上的函数fn
    const res = obj[fun](...args);
    // 4.删除添加的属性
    // 在newcall给obj添加了一个临时属性objKey，那么用完应该删掉
    delete obj[fun];
    
    return res;
}

// apply
Function.prototype.newapply = function(obj = window, args) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error');
    }
    const fn = Symbol();
    obj[fn] = this; 
    
    const res = obj[fn](...args);
    delete obj[fn];

    return res;
}

// bind
Function.prototype.newbind = function(obj, ...args1) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error');
    }
    return (...args2) => {
        let fun = Symbol();
        obj[fun] = this;
        
        obj[fun](...args1.concat(args2));
        delete obj[fun];
    }
}


function show(...args) {
    console.log(args);
    console.log(this.name);
    // return 1
}

// let call =   //带返回值
show.newcall({name: 'call'}, 'call1','call2','call3');
// console.log(call);

show.newapply({name: 'apply'}, ['apply1','apply2','apply3']);

let bind = show.newbind({name:'bind'}, 'bind1', 'bind2');
bind();
bind('eryabind');