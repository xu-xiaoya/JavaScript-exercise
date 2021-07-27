class Enemy2 {
    x:number = 0;
    y:number = 0;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
    fly() {
        console.log(`飞到x= ${this.x} y= ${this.y}`);
    }
}
interface IStudent {
    sname:string;
    sage:number;
    intr():void;
}
export {IStudent, Enemy2}