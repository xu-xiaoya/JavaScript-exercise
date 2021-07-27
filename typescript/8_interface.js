"use strict";
// 定义实际class，实现接口规定
var MyStudent = /** @class */ (function () {
    function MyStudent(sname, sage, className) {
        this.sname = "";
        this.sage = 0;
        this.className = "";
        this.sname = sname;
        this.sage = sage;
        this.className = className;
    }
    MyStudent.prototype.intr = function () {
        console.log("I'm " + this.sname + ",  " + this.sage + ", from  " + this.className);
    };
    return MyStudent;
}());
var erya2 = new MyStudent('ERYA', 15, '初三三班');
console.log(erya2);
erya.intr();
