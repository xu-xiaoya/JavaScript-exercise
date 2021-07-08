// 父类型class
class Enemy {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
    // 父类型class的原型对象
    fly() {
        console.log(`飞到:x=${this.x},y=${this.y}`)
    }
}

// 子类型class plane继承父类型class enemy
class Plane extends Enemy{
    constructor(x,y,score) {
        super(x,y);//->父类型Enemy的constructor()
        //相当于执行了
        //Enemy的constructor(){
        // this.x=x;
        // this.y=y;
        //}
        this.score=score;
    }
    getScore() {
        console.log(`击落敌机得${this.score}分`)
    }
}
// 子类型class san继承父类型class enemy
class San extends Enemy{
    constructor(x, y, award) {
        super(x,y);
        this.award=award;
    }
    getAward() { 
        console.log(`击落降落伞，得${this.award}奖励`)
    }      
}

var p1=new Plane(50,100,5);
console.log(p1);
p1.fly();//p1的爷爷Enemy给的
p1.getScore();//p1的爸爸Plane给的

var s1=new San(20,80,"1 life");
console.log(s1);
s1.fly();//s1的爷爷Enemy给的
s1.getAward();//s1的爸爸San给的