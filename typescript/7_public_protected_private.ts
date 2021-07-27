class Father {
    // public公用的，全部可用
    public moneypublic:string = "爸爸公开的钱";

    //受保护 protected 只有父和子类可以使用
    protected moneyProtected:string = "爸爸和儿子一起偷吃零食的钱";

    // private 私有，仅class中可用
    private moneyPrivate:string = "爸爸独有的私房钱";

    // 默认public
    fatherpay() {
        console.log(`爸爸用${this.moneypublic}买了包烟`);
        console.log(`爸爸用${this.moneyProtected}买了个巧克力`);
        console.log(`爸爸用${this.moneyPrivate}买基金，全赔了`);
    }
}
class Son extends Father {
    sonPay() {
        console.log(`儿子用${this.moneypublic}买了个游戏机`);
        console.log(`儿子用${this.moneyProtected}买了个冰淇淋`)
        // console.log(`儿子用${this.moneyPrivate}买了个飞机`)  //报错
    }
}

var dong = new Father();
dong.fatherpay();

var son = new Son();
son.sonPay();

console.log(`妈妈用${dong.moneypublic}买了化妆品`);
// console.log(`妈妈用${dong.moneyProtected}买包`);     //报错
// console.log(`妈妈用${dong.moneyPrivate}做美容`);     //报错