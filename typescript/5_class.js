"use strict";
var Student = /** @class */ (function () {
    function Student(sname, sage) {
        // 必须先设置属性名（默认值）
        this.sname = "";
        this.sage = 0;
        this.sname = sname;
        this.sage = sage;
    }
    Student.prototype.intr = function () {
        console.log("\u6211\u7684\u540D\u5B57\u662F" + this.sname + "," + this.sage + "\u5C81");
    };
    return Student;
}());
var erya = new Student("ERYA", 11);
console.log(erya);
