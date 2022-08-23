"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const stats_tracker_1 = require("./stats-tracker");
function test() {
    let tracker = stats_tracker_1.StatsTracker.instance;
    console.log(`Widget views:${tracker.widgetViews}`);
    console.log(`Twitter shares:${tracker.twitterShares}`);
}
exports.test = test;
