"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialExpiredState = void 0;
var paid_state_1 = require("./paid-state");
var TrialExpiredState = /** @class */ (function () {
    function TrialExpiredState(_subscription) {
        this._subscription = _subscription;
    }
    TrialExpiredState.prototype.pay = function (amount) {
        this._subscription.state = new paid_state_1.PaidState(this._subscription, amount);
    };
    TrialExpiredState.prototype.checkExpiration = function () {
        throw new Error("Trial already expired");
    };
    TrialExpiredState.prototype.report = function () {
        return "Trial Expired";
    };
    return TrialExpiredState;
}());
exports.TrialExpiredState = TrialExpiredState;
