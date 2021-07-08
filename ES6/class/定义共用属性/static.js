class Student{
    constructor(sname, sage) {
      this.sname = sname;
      this.sage = sage;
    }
    intr() {
        console.log(`I'm ${this.sname}, I'm ${this.sage}, I'm from ${Student.className}`);
    }
    static className = '幼儿园小班';
}

//创建两个学生: 
var erya = new Student("erya", 5);
var yuanyuan = new Student("yuanyuan", 6);
erya.intr();
yuanyuan.intr();

//过了一年，两个学生都升级
Student.className="幼儿园中班";
erya.intr();
yuanyuan.intr();
