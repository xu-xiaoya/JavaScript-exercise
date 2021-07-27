"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy2 = void 0;
var Enemy2 = /** @class */ (function () {
    function Enemy2(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Enemy2.prototype.fly = function () {
        console.log("\u98DE\u5230x= " + this.x + " y= " + this.y);
    };
    return Enemy2;
}());
exports.Enemy2 = Enemy2;
