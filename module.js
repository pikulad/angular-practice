"use strict";
exports.__esModule = true;
exports.mul = exports.div = exports.sub = exports.add = void 0;
var add = /** @class */ (function () {
    function add(x, y) {
        this.x = x;
        this.y = y;
    }
    add.prototype.sum = function () {
        console.log("SUM: " + (this.x + this.y));
    };
    return add;
}());
exports.add = add;
var sub = /** @class */ (function () {
    function sub(x, y) {
        this.x = x;
        this.y = y;
    }
    sub.prototype.sub1 = function () {
        console.log("SUB: " + (this.x - this.y));
    };
    return sub;
}());
exports.sub = sub;
var div = /** @class */ (function () {
    function div(x, y) {
        this.x = x;
        this.y = y;
    }
    div.prototype.div1 = function () {
        console.log("Div: " + (this.x / this.y));
    };
    return div;
}());
exports.div = div;
var mul = /** @class */ (function () {
    function mul(x, y) {
        this.x = x;
        this.y = y;
    }
    mul.prototype.mul1 = function () {
        console.log("MUL: " + (this.x * this.y));
    };
    return mul;
}());
exports.mul = mul;
