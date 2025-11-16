"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Die = void 0;
const EMPTY_STR_TO_UNDEFINED = (str) => (str === '' ? undefined : str);
function rollDice(sides) {
    return Math.floor(Math.random() * sides + 1);
}
class Die {
    static from(notation) {
        switch (notation) {
            case 'd66':
                return D66;
            default:
                return new StandardDie(notation);
        }
    }
}
exports.Die = Die;
const D66 = new (class extends Die {
    roll() {
        const rolls = [rollDice(6), rollDice(6)];
        return {
            result: parseInt(`${rolls[0]}${rolls[1]}`),
            rolls: `${rolls[0]} + ${rolls[1]}`,
        };
    }
})();
class StandardDie extends Die {
    constructor(notation) {
        super();
        const diceNotation = /^(\d*)d(\d+)(\s*(\+|-)\s*(\d+))?$/g;
        const [, number = '1', sides = '1', , plusMinus = '+', modifier = '0'] = diceNotation.exec(notation).map(EMPTY_STR_TO_UNDEFINED);
        this.number = parseInt(number);
        this.sides = parseInt(sides);
        this.modifier = parseInt(plusMinus + modifier);
    }
    roll() {
        const rolls = Array.from({ length: this.number }, () => rollDice(this.sides));
        const result = rolls.reduce((a, b) => a + b, 0) + this.modifier;
        const rollsWithModifier = this.modifier !== 0 ? [...rolls, this.modifier] : rolls;
        const roll = {
            result,
            rolls: rollsWithModifier.join(' + '),
        };
        return roll;
    }
}
//# sourceMappingURL=dice.js.map