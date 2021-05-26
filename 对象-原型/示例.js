class B{}
B. prototype. a = 1;
B. prototype. add =()=>{//箭头函数（匿名函数）
    this. a++;
};
const b1 = new B();
console. log(b1.a);//1

const b2 = new B();
b2.add();
console.log(b2.a);//2