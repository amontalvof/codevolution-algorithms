"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_characters_pool_1 = require("./game-characters-pool");
let level = 12;
let pool = new game_characters_pool_1.GameCharactersPool(level);
// Load 40 warriors
for (let i = 0; i < 40; i++) {
    console.log(i + 1);
    console.log(pool.getWarrior());
}
