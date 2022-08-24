"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_characters_factory_1 = require("./game-characters-factory");
let warrior = game_characters_factory_1.GameCharactersFactory.getWarrior(6);
let mage = game_characters_factory_1.GameCharactersFactory.getMage(12);
console.log('Warrior at level6: ', warrior);
console.log('Mage at level 12: ', mage);
