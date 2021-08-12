class Student{
    //className="幼儿园小班" //自有属性
    
    constructor(sname, sage) {
      this.sname = sname;
      this.sage = sage;
      //如果当前类型的原型对象中不包含指定的共有属性
      if (Student.prototype.className===undefined) {
        //就自动向原型对象中添加共有属性
        Student.prototype.className="幼儿园小班"
      }
    }
    intr() {
      console.log(`I'm ${this.sname}, I'm ${this.sage}`)
    }
}

//创建两个学生: 
var erya = new Student("erya", 5);
var yuanyuan = new Student("yuanyuan", 6);
console.log(erya);        //Student { sname: 'erya', sage: 5 }
console.log(yuanyuanya);  //Student { sname: 'yuanyuan', sage: 6 }

//过了一年，两人共同升了一级
Student.prototype.className="幼儿园中班"
console.log(erya.className, yuanyuan.className);  //幼儿园中班 幼儿园中班