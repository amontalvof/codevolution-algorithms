"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialState = void 0;
var paid_state_1 = require("./paid-state");
var trial_expired_state_1 = require("./trial-expired-state");
var TrialState = /** @class */ (function () {
    function TrialState(_subscription) {
        this._subscription = _subscription;
        this.daysRemaining = 14;
    }
    TrialState.prototype.pay = function (amount) {
        this._subscription.state = new paid_state_1.PaidState(this._subscription, amount);
    };
    TrialState.prototype.checkExpiration = function () {
        this.daysRemaining--;
        if (this.daysRemaining <= 0) {
            this._subscription.state = new trial_expired_state_1.TrialExpiredState(this._subscription);
        }
    };
    TrialState.prototype.report = function () {
        return "".concat(this.daysRemaining, " left on trial");
    };
    return TrialState;
}());
exports.TrialState = TrialState;
