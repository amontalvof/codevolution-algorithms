"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileErrorLoggingStrategy = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var filePath = path_1.default.join(__dirname, 'logs/error.log');
var FileErrorLoggingStrategy = /** @class */ (function () {
    function FileErrorLoggingStrategy() {
    }
    FileErrorLoggingStrategy.prototype.log = function (err) {
        return new Promise(function (resolve, reject) {
            fs_1.default.appendFile(filePath, "".concat(err, ", Date: ").concat(new Date().toString(), "\n"), 'utf8', function (error) {
                if (error) {
                    console.error('Error Logging failed');
                    reject(error);
                }
                else {
                    // @ts-ignore
                    resolve();
                }
            });
        });
    };
    return FileErrorLoggingStrategy;
}());
exports.FileErrorLoggingStrategy = FileErrorLoggingStrategy;
