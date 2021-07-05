function Student(sname, sage) {
    this.sname=sname;
    this.sage=sage;
}

var lilei=new Student("Li Lei", 18)
var hmm=new Student("Han Meimei", 19);
var father={
    money:1000000000000,
    car:"infiniti"
}


// hmm.__proto__=father;//不推荐,浏览器不兼容
// Object.setPrototypeOf(子对象,新的父对象);
Object.setPrototypeOf(hmm,father);


console.log(hmm.money, hmm.car);
console.log(lilei.money, lilei.car);
