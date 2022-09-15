"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subscription_1 = require("./subscription");
var subscription = new subscription_1.Subscription();
subscription.checkSubscriptionStatus();
subscription.dayPassed();
subscription.checkSubscriptionStatus();
for (var i = 0; i < 13; i++) {
    subscription.dayPassed();
    subscription.checkSubscriptionStatus();
}
subscription.pay(200);
subscription.checkSubscriptionStatus();
