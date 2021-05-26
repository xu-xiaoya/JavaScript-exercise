const obj = {
    a : 1,
};
obj.add = ()=>{
    console. log(this.a);
};
obj.add();//undefined