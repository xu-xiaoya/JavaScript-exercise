function calc(ename) {
    //从arguments中1位置开始复制到结尾的剩余元素为新数组返回
    var arr = [].slice.call(arguments,1);
    var total = arr.reduce((prev, elem)=>prev+elem,0);
    console.log(`${ename}的工资${total}`);
}
calc('erya',10000,1000,2000)