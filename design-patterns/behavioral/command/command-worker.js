"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandWorker = void 0;
var CommandWorker = /** @class */ (function () {
    function CommandWorker(interval) {
        this._commands = [];
        this._interval = interval;
        this.startWorker();
    }
    CommandWorker.prototype.registerCommand = function (command) {
        console.log("Registering command");
        if (!this._commands.find(function (c) { return c == command; })) {
            this._commands.push(command);
        }
    };
    CommandWorker.prototype.startWorker = function () {
        var _this = this;
        setInterval(function () {
            var command = _this._commands.pop();
            if (command) {
                command.execute();
            }
        }, this._interval);
    };
    return CommandWorker;
}());
exports.CommandWorker = CommandWorker;
