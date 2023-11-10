"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.Status = void 0;
// Enum Status
var Status;
(function (Status) {
    Status[Status["Winner"] = 0] = "Winner";
    Status[Status["Loser"] = 1] = "Loser";
    Status[Status["Progress"] = 2] = "Progress";
})(Status || (exports.Status = Status = {}));
var Game = /** @class */ (function () {
    function Game(words) {
        this.words = words;
        this.currentWordIndex = 0;
        this.hiddenWord = words[this.currentWordIndex].hide;
        this.triesLeft = 7;
    }
    Game.prototype.getStatus = function () {
        if (this.hiddenWord === this.words[this.currentWordIndex].word) {
            return Status.Winner;
        }
        else if (this.triesLeft <= 0) {
            return Status.Loser;
        }
        else {
            return Status.Progress;
        }
    };
    Game.prototype.getHiddenWord = function () {
        return this.hiddenWord;
    };
    Game.prototype.getTriesLeft = function () {
        return this.triesLeft;
    };
    Game.prototype.getWord = function () {
        return this.words[this.currentWordIndex].word;
    };
    Game.prototype.guessLetter = function (letter) {
        if (this.hiddenWord === this.words[this.currentWordIndex].word) {
            return; // Le jeu est déjà gagné
        }
        if (this.hiddenWord.indexOf(letter) !== -1) {
            console.log("Vous avez déjà trouvé cette lettre.");
            return;
        }
        if (this.words[this.currentWordIndex].word.indexOf(letter) !== -1) {
            var newHiddenWord = "";
            for (var i = 0; i < this.words[this.currentWordIndex].word.length; i++) {
                if (this.words[this.currentWordIndex].word[i] === letter) {
                    newHiddenWord += letter;
                }
                else {
                    newHiddenWord += this.hiddenWord[i];
                }
            }
            this.hiddenWord = newHiddenWord;
        }
        else {
            this.triesLeft--;
            console.log("rat\u00E9 : ".concat(this.triesLeft));
        }
        if (this.hiddenWord === this.words[this.currentWordIndex].word) {
            console.log("Mot : ".concat(this.words[this.currentWordIndex].word));
            console.log("félicitation");
            this.currentWordIndex++;
            if (this.currentWordIndex < this.words.length) {
                console.log("Prochain mot : " + this.words[this.currentWordIndex].hide);
                this.hiddenWord = this.words[this.currentWordIndex].hide;
            }
        }
    };
    return Game;
}());
exports.Game = Game;
