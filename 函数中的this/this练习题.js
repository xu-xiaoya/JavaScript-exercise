const obj = {
    a : 1,
};
obj.add = ()=>{
    console. log(this.a);//this指的是window对象，而此时window下a未定义，故undefined
};
obj.add();//undefined