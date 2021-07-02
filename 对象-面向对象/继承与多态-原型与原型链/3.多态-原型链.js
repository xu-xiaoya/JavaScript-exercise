function Student(sname,sage){
  this.sname=sname;
  this.sage=sage;
}

//在顶级的父类型Object中的原型对象已经有一些共有方法（toString……）
//在Student中为所有学生重写好用的toString()
Student.prototype.toString=function(){
  return `{ sname:${this.sname}, sage:${this.sage} }`
}

var erya=new Student("erya",11)
var arr=[1,2,3];
var now=new Date();

console.log(lilei.toString())
console.log(arr.toString())
console.log(now.toString())