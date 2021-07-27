import IStudent from "./9_module";

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
var yuan = new MyStudent('yuan',15,'初三三班');
console.log(yuan);
yuan.intr();