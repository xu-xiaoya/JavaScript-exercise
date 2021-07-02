//构造函数中不能定义方法
function Student(sname,sage){
    this.sname=sname;
    this.sage=sage;
  }
  
//要定义的方法全部写在Student的原型对象中，成为公共函数
Student.prototype.intr=function(){
    // this在此处只定义，不调用
    console.log(`I'm ${this.sname}, I'm ${this.sage}`)
}

var erya1=new Student("erya1",11)
var erya2=new Student("erya2",12);

// 调用公共函数，this被调用，this->'.'前对象erya1
erya1.intr();
// 调用公共函数，this被调用，this->'.'前对象erya2
erya2.intr();

//验证子孩子的爹是不是Student的老公
console.log(erya1.__proto__==Student.prototype);//true
console.log(erya2.__proto__==Student.prototype);//true