// 通过接口来规定学生类型的class的内容规范
interface IStudent {
    sname:string;
    sage:number;
    intr():void;
}
// 定义实际class，实现接口规定
class MyStudent implements IStudent {
    sname:string = "";
    sage:number = 0;
    className:string = "";
    constructor(sname:string, sage:number, className:string) {
        this.sname = sname;
        this.sage = sage;
        this.className = className;
    }
    intr() {
        console.log(`I'm ${this.sname},  ${this.sage}, from  ${this.className}`)
    }
}

var erya2 = new MyStudent('ERYA',15,'初三三班');
console.log(erya2);
erya.intr();