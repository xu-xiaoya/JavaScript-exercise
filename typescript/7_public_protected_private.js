"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Father = /** @class */ (function () {
    function Father() {
        // public公用的，全部可用
        this.moneypublic = "爸爸公开的钱";
        //受保护 protected 只有父和子类可以使用
        this.moneyProtected = "爸爸和儿子一起偷吃零食的钱";
        // private 私有，仅class中可用
        this.moneyPrivate = "爸爸独有的私房钱";
    }
    // 默认public
    Father.prototype.fatherpay = function () {
        console.log("\u7238\u7238\u7528" + this.moneypublic + "\u4E70\u4E86\u5305\u70DF");
        console.log("\u7238\u7238\u7528" + this.moneyProtected + "\u4E70\u4E86\u4E2A\u5DE7\u514B\u529B");
        console.log("\u7238\u7238\u7528" + this.moneyPrivate + "\u4E70\u57FA\u91D1\uFF0C\u5168\u8D54\u4E86");
    };
    return Father;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Son.prototype.sonPay = function () {
        console.log("\u513F\u5B50\u7528" + this.moneypublic + "\u4E70\u4E86\u4E2A\u6E38\u620F\u673A");
        console.log("\u513F\u5B50\u7528" + this.moneyProtected + "\u4E70\u4E86\u4E2A\u51B0\u6DC7\u6DCB");
        // console.log(`儿子用${this.moneyPrivate}买了个飞机`)  //报错
    };
    return Son;
}(Father));
var dong = new Father();
dong.fatherpay();
var son = new Son();
son.sonPay();
console.log("\u5988\u5988\u7528" + dong.moneypublic + "\u4E70\u4E86\u5316\u5986\u54C1");
// console.log(`妈妈用${dong.moneyProtected}买包`);     //报错
// console.log(`妈妈用${dong.moneyPrivate}做美容`);     //报错
