"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardDeck = void 0;
var CardDeck = /** @class */ (function () {
    function CardDeck() {
        this._deck = [];
    }
    CardDeck.prototype.add = function (component) {
        if (component) {
            this._deck.push(component);
        }
        else {
            throw new Error("Invalid component");
        }
    };
    CardDeck.prototype.remove = function (component) {
        if (!component) {
            throw new Error("Invalid component");
        }
        else {
            this._deck = this._deck.filter(function (comp) { return comp != component; });
        }
    };
    CardDeck.prototype.get = function (index) {
        if (index < 0 || index >= this._deck.length) {
            throw new Error("Invalid index");
        }
        return this._deck[index];
    };
    CardDeck.prototype.display = function () {
        return this._deck.map(function (component) { return component.display(); }).join("\n");
    };
    return CardDeck;
}());
exports.CardDeck = CardDeck;
