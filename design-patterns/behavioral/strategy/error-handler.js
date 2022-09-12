"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(_displayStrategy, _loggingStrategy) {
        this._displayStrategy = _displayStrategy;
        this._loggingStrategy = _loggingStrategy;
    }
    ErrorHandler.prototype.handle = function (err, title, body) {
        this._displayStrategy.display(title, body);
        return this._loggingStrategy.log(err);
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
