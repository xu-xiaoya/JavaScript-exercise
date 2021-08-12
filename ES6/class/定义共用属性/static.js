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
erya.intr();      //I'm erya, I'm 5, I'm from 幼儿园小班
yuanyuan.intr();  //I'm yuanyuan, I'm 6, I'm from 幼儿园小班

//过了一年，两个学生都升级
Student.className="幼儿园中班";
erya.sage++;
yuanyuan.sage++;
erya.intr();      //I'm erya, I'm 6, I'm from 幼儿园中班
yuanyuan.intr();  //I'm yuanyuan, I'm 7, I'm from 幼儿园中班