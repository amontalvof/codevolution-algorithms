"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsTracker = void 0;
class StatsTracker {
    constructor() {
        this.buttonClicks = 0;
        this.facebookShares = 0;
        this.twitterShares = 0;
        this.widgetViews = 0;
        if (StatsTracker._instance) {
            throw new Error('Cannot initialize singleton class using new');
        }
        StatsTracker._instance = this;
    }
    static get instance() {
        return StatsTracker._instance;
    }
}
exports.StatsTracker = StatsTracker;
StatsTracker._instance = new StatsTracker();
