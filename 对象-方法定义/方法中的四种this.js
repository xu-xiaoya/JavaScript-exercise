//判断this不要看定义在哪，只看在哪里调用的函数！
//调用时，.前是谁，this就指谁！

function who() {        
    alert(this.name);
}
// 情况一：在调用方法有"."的情况下，this->.前的对象
o.who();    //调用对象o的方法who，返回字符o   this->o
f.who();    //调用对象f的方法who，返回字符f   this->f



//情况二：this->new刚创建的新对象Student
function Student(sname,sage) {
    this.sname = sname;
    this.sage = sage;
    this.intr = function() {
        console.log(`I am  ${this.sname}, I am ${this.sage}`);
    }
}
var erya = new Student("erya", 11);



//轻快三：this 默认->window
fun() 


// 情况四，原型对象：
function Student(sname,sage) {
    this.sname=sname;
    this.sage=sage;
}
//原型对象中的this 指将来调用这个共用的函数的某一个子对象
// 此处只是定义，非调用
Student.prototype.intr=function(){
    console.log(`I'm ${this.sname}, I'm ${this.sage}`)
}

var lilei=new Student("Li Lei",11)
var hmm=new Student("Han Meimei",12);
// 此时调用共用函数，看'.'前，this->lilei
lilei.intr();
// 调用共用函数，看'.'前，this->hmm
hmm.intr();