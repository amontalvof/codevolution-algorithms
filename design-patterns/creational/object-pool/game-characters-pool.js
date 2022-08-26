"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCharactersPool = void 0;
const game_characters_factory_1 = require("./game-characters-factory");
class GameCharactersPool {
    constructor(_level) {
        this._level = _level;
        this._warriorsPool = [];
        this._magesPool = [];
        this.loadWarriorsPool();
        this.loadMagesPool();
    }
    loadMagesPool() {
        for (let i = 0; i < GameCharactersPool.MAGES_POOL_SIZE; i++) {
            this._magesPool.push(game_characters_factory_1.GameCharactersFactory.getMage(this._level));
        }
    }
    loadWarriorsPool() {
        for (let i = 0; i < GameCharactersPool.WARRIORS_POOL_SIZE; i++) {
            this._warriorsPool.push(game_characters_factory_1.GameCharactersFactory.getWarrior(this._level));
        }
    }
    getPoolItem(pool, reloadFn) {
        let item = pool.pop();
        if (!pool.length) {
            reloadFn();
        }
        return item;
    }
    getWarrior() {
        return this.getPoolItem(this._warriorsPool, this.loadWarriorsPool.bind(this));
    }
    getMage() {
        return this.getPoolItem(this._magesPool, this.loadMagesPool.bind(this));
    }
}
exports.GameCharactersPool = GameCharactersPool;
GameCharactersPool.WARRIORS_POOL_SIZE = 30;
GameCharactersPool.MAGES_POOL_SIZE = 20;
