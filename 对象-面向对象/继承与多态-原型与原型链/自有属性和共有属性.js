function Student(sname,sage) {
    this.sname=sname;
    this.sage=sage;
}

Student.prototype.className="1班";
var erya1=new Student("erya1",11);
var erya2=new Student("erya2",12);

// 获取属性值
console.log(erya1);
console.log(erya2);
console.log(erya1.className, erya2.className);//1班 1班

//修改属性值
//错误: 
// lilei.className="初二2班";
//正确:
Student.prototype.className="2班";
console.log(erya1.className, erya2.className);//2班 2班