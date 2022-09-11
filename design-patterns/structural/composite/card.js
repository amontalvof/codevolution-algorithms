"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(name, attack, defense) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
    }
    Card.prototype.add = function (component) {
        throw new Error("Operation not supported");
    };
    Card.prototype.remove = function (component) {
        throw new Error("Operation not supported");
    };
    Card.prototype.get = function (index) {
        throw new Error("Operation not supported");
    };
    Card.prototype.display = function () {
        return "".concat(this.name, ": ").concat(this.attack, " / ").concat(this.defense);
    };
    return Card;
}());
exports.Card = Card;
