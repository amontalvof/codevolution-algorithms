"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = __importDefault(require("./inversify.config"));
var types_1 = require("./types");
var a = inversify_config_1.default.get(types_1.TYPES.IDepA);
a.doA();
console.log('\x1b[0m', '\x1b[30m', '\x1b[46m', '************************************', '\x1b[0m');
var b = inversify_config_1.default.get(types_1.TYPES.IDepB);
b.doB();
console.log('\x1b[0m', '\x1b[30m', '\x1b[46m', '************************************', '\x1b[0m');
var c = inversify_config_1.default.get(types_1.TYPES.IDepC);
c.doC();
