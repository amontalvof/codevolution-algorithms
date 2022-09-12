"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleErrorDisplayStrategy = void 0;
var chalk_1 = __importDefault(require("chalk"));
var ConsoleErrorDisplayStrategy = /** @class */ (function () {
    function ConsoleErrorDisplayStrategy() {
    }
    ConsoleErrorDisplayStrategy.prototype.display = function (title, body) {
        console.log("".concat(chalk_1.default.red(title), ": ").concat(chalk_1.default.blue(body)));
    };
    return ConsoleErrorDisplayStrategy;
}());
exports.ConsoleErrorDisplayStrategy = ConsoleErrorDisplayStrategy;
