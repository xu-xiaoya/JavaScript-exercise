"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { IStudent, Enemy2 } from "./10_modules";
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
