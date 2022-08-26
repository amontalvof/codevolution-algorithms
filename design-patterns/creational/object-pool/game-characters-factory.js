"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCharactersFactory = void 0;
class GameCharactersFactory {
    static getWarrior(level) {
        let warrior;
        if (level < 10) {
            warrior = {
                strength: 18,
                dexterity: 12,
                health: 20,
                magic: 0,
            };
        }
        else {
            warrior = {
                strength: 30,
                dexterity: 21,
                health: 32,
                magic: 0,
            };
        }
        return warrior;
    }
    static getMage(level) {
        let mage;
        if (level < 10) {
            mage = {
                strength: 0,
                dexterity: 8,
                health: 10,
                magic: 32,
            };
        }
        else {
            mage = {
                strength: 2,
                dexterity: 12,
                health: 14,
                magic: 92,
            };
        }
        return mage;
    }
}
exports.GameCharactersFactory = GameCharactersFactory;
