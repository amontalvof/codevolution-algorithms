"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
var trial_state_1 = require("./trial-state");
var Subscription = /** @class */ (function () {
    function Subscription() {
        this.state = new trial_state_1.TrialState(this);
    }
    Subscription.prototype.pay = function (amount) {
        this.state.pay(amount);
    };
    Subscription.prototype.dayPassed = function () {
        this.state.checkExpiration();
    };
    Subscription.prototype.checkSubscriptionStatus = function () {
        console.log(this.state.report());
    };
    return Subscription;
}());
exports.Subscription = Subscription;
