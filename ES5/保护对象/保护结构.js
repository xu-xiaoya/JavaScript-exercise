var erya={
    eid:1,
    ename:"二雅",
    salary:1022
}
Object.defineProperties(erya, {
    eid:{ writable:false },
    salary:{ enumerable:false }
})

//防扩展: 
Object.preventExtensions(erya);

//密封: (够了)
Object.seal(erya);

//冻结: (过于严格)
Object.freeze(erya);