class Student {
    // 必须先设置属性名（默认值）
    sname:string = "";
    sage:number = 0;
    constructor(sname:string, sage:number) {
        this.sname = sname;
        this.sage = sage;
    }
    intr() {
        console.log(`我的名字是${this.sname},${this.sage}岁`)
    }
}
var erya = new Student("ERYA", 11);
console.log(erya);