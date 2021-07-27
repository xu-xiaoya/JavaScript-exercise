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
var Enemy = /** @class */ (function () {
    function Enemy(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Enemy.prototype.fly = function () {
        console.log("\u98DE\u5230x= " + this.x + " y= " + this.y);
    };
    return Enemy;
}());
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane(x, y, score) {
        var _this = _super.call(this, x, y) || this;
        _this.score = 0;
        _this.score = score;
        return _this;
    }
    Plane.prototype.getScore = function () {
        console.log("\u51FB\u843D\u654C\u673A\uFF0C\u5F97\u5230" + this.score + "\u5206");
    };
    return Plane;
}(Enemy));
var p1 = new Plane(50, 100, 5);
p1.fly();
p1.getScore();
console.log(p1);
