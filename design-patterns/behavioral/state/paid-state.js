"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaidState = void 0;
var trial_expired_state_1 = require("./trial-expired-state");
var PaidState = /** @class */ (function () {
    function PaidState(_subscription, amount) {
        this._subscription = _subscription;
        this.amountPaid = 0;
        this.amountPaid = amount;
    }
    PaidState.prototype.pay = function (amount) {
        throw new Error("Alread paid");
    };
    PaidState.prototype.checkExpiration = function () {
        this._subscription.state = new trial_expired_state_1.TrialExpiredState(this._subscription);
    };
    PaidState.prototype.report = function () {
        return "On paid plan with ".concat(this.amountPaid, "$ subscription");
    };
    return PaidState;
}());
exports.PaidState = PaidState;
