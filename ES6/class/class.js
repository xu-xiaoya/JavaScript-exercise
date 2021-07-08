// class{} 包裹原构造函数+原型对象方法 原构造函数名升级为整个class的名字 
class Student{
    //1. 构造函数统一更名为constructor
    constructor(sname,sage) {
        //仍然为自有属性
        this.sname=sname;
        this.sage=sage;
    }
    //2. 原型对象: 直接放在class{}内的方法，保存在原型对象中的方法
    intr(){
        console.log(`I'm ${this.sname}, I'm ${this.sage}`)
    }
}

//创建两个学生: 
var lilei=new Student("Li Lei",11);
var hmm=new Student("Han Meimei",12);
console.log(lilei);
console.log(hmm);
lilei.intr();
hmm.intr();