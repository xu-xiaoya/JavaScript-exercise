function Student(sname, sage){
    this.sname=sname;
    this.sage=sage;
}
var father={
    money:1000000000000,
    car:"infiniti"
}
// 修改构造函数的prototype属性指向新的对象 构造函数.prototype = 新原型对象
// 一定要在创建第一个子对象之前就要更换!
Student.prototype=father;

var lilei=new Student("Li Lei",18)
var hmm=new Student("Han Meimei",19);

console.log(hmm.money, hmm.car);
console.log(lilei.money, lilei.car);