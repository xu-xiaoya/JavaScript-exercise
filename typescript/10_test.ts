import { IStudent } from "./10_modules";
// import { IStudent, Enemy2 } from "./10_modules";

class Student implements IStudent {
    sname: string = "";
    sage: number = 0;
    constructor(sname:string, sage:number) {
        this.sage = sage;
        this.sname = sname;
    }
    intr(): void {
        console.log(`I'm ${this.sname},  ${this.sage}`);
    }   
}