"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mockword_1 = require("./Mockword");
var game_1 = require("./game");
var game = new game_1.Game(Mockword_1.MockWords);
function playGame() {
    console.log("Bienvenue dans le jeu du pendu !");
    while (game.getStatus() === game_1.Status.Progress) {
        console.log("Mot : ".concat(game.getHiddenWord()));
        console.log("Il vous reste : ".concat(game.getTriesLeft()));
        var letter = prompt("Entez une lettre: ");
        if (letter !== null) {
            game.guessLetter(letter);
        }
    }
    if (game.getStatus() === game_1.Status.Winner) {
        console.log("Bravo ! Vous avez gagné!");
    }
    else if (game.getStatus() === game_1.Status.Loser) {
        console.log("Dommage ! Vous avez perdu!");
        console.log("Le mot \u00E9tait : ".concat(game.getWord()));
    }
}
playGame();
