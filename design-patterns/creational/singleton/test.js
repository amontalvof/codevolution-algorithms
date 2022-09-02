"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var stats_tracker_1 = require("./stats-tracker");
function test() {
    var tracker = stats_tracker_1.StatsTracker.instance;
    console.log("Widget views:".concat(tracker.widgetViews));
    console.log("Twitter shares:".concat(tracker.twitterShares));
}
exports.test = test;
