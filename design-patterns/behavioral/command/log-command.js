"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCommand = void 0;
var fs_1 = __importDefault(require("fs"));
var LogCommand = /** @class */ (function () {
    function LogCommand(params) {
        this._logCommandParams = params;
    }
    LogCommand.prototype.execute = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contents = "".concat(_this._logCommandParams.title, ": ").concat(_this._logCommandParams.body, " - ").concat(_this._logCommandParams.error, "\n");
            fs_1.default.appendFile(_this._logCommandParams.filename, contents, "utf8", function (err) {
                if (err) {
                    console.error("Logger failed");
                    reject(err);
                }
                else {
                    //@ts-ignore
                    resolve();
                }
            });
        });
    };
    return LogCommand;
}());
exports.LogCommand = LogCommand;
