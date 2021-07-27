"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(sname, sage) {
        this.sname = "";
        this.sage = 0;
        this.sage = sage;
        this.sname = sname;
    }
    Student.prototype.intr = function () {
        console.log("I'm " + this.sname + ",  " + this.sage);
    };
    return Student;
}());
var yuan = new MyStudent('yuan', 15, '初三三班');
console.log(yuan);
yuan.intr();
