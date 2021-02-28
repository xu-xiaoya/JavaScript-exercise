//this总是指向当前调用的对象

function who() {        //定义一个抽象化方法
    alert(this.name);
}
var o = new Object();
o.name = "o";
o.who = who;            //引用抽象化方法who

var f = new Object();
f.name = "f";
f.who = who;

/*使用this能确保在不同环境下都能找到调用当前方法的对象 */
o.who();    //调用对象o的方法who，返回字符o   this指代对象o
f.who();    //调用对象f的方法who，返回字符f   this指代对象f