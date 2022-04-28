"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandom = exports.generateFromSettings = void 0;
var R = require("ramda");
var Rotor = /** @class */ (function () {
    function Rotor(startPos, notchPos, input, output) {
        if (startPos === void 0) { startPos = 0; }
        if (notchPos === void 0) { notchPos = 0; }
        if (input === void 0) { input = []; }
        if (output === void 0) { output = []; }
        this.notchPos = notchPos;
        this.currentPos = startPos;
        this.startPos = startPos;
        this.input = input;
        this.output = output;
    }
    Rotor.prototype.rotate = function () {
    };
    return Rotor;
}());
exports.default = Rotor;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(array) {
    var _a;
    var currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        _a = [
            array[randomIndex], array[currentIndex]
        ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
    }
    return array;
}
function generateFromSettings() {
}
exports.generateFromSettings = generateFromSettings;
function generateRandom() {
    var startPos = getRndInteger(1, 26);
    var notchPos = getRndInteger(1, 26);
    var input = shuffle(R.range(1, 27));
    var output = shuffle(R.range(1, 27));
    return new Rotor(startPos, notchPos, input, output);
}
exports.generateRandom = generateRandom;
