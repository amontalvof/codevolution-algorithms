"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(maxSpeed) {
        this._currentSpeed = 0;
        this._currentSpeedObservers = [];
        this._maxSpeed = maxSpeed;
    }
    Object.defineProperty(Car.prototype, "maxSpeed", {
        get: function () {
            return this._maxSpeed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "currentSpeed", {
        get: function () {
            return this._currentSpeed;
        },
        set: function (value) {
            if (this._currentSpeed < 0) {
                throw new Error("Invalid current speed");
            }
            if (value > this._maxSpeed) {
                throw new Error("Engine broke");
            }
            if (this._currentSpeed != value) {
                var oldValue = this._currentSpeed;
                this._currentSpeed = value;
                this.triggerCurrentSpeedObservers(value, oldValue);
            }
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.registerCurrentSpeedObserver = function (observer) {
        if (!this._currentSpeedObservers.find(function (o) { return o == observer; })) {
            this._currentSpeedObservers.push(observer);
        }
    };
    Car.prototype.triggerCurrentSpeedObservers = function (newValue, oldValue) {
        this._currentSpeedObservers.forEach(function (observer) { return observer(newValue, oldValue); });
    };
    return Car;
}());
exports.Car = Car;
