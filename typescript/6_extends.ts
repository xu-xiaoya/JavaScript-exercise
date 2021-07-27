class Enemy {
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
class Plane extends Enemy {
    score:number = 0;
    constructor(x:number, y:number, score:number) {
        super(x,y);
        this.score = score;
    }
    getScore() {
        console.log(`击落敌机，得到${this.score}分`);
    }
}
var p1 = new Plane(50,100,5);
p1.fly();
p1.getScore();
console.log(p1);