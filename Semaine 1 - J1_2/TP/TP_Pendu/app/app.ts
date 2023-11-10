import { MockWords } from "./Mockword";
import { Game, Status } from "./game";

function playGame() {
    console.log("Bienvenue sur le jeu du pendu !");
    const game = new Game(MockWords);

    while (game.getStatus() === Status.Progress) {
        console.log(`Mot : ${game.getHiddenWord()}`);
        console.log(`Il vous reste : ${game.getTriesLeft()}`);
        const letter = prompt("Entrez une lettre: ");

        if (letter === null) {
            break; // Quitte la boucle si aucune lettre n'est entrée
        }

        game.guessLetter(letter);
    }

    if (game.getStatus() === Status.Winner) {
        console.log("Vous avez gagné!");
    } else if (game.getStatus() === Status.Loser) {
        console.log("Vous avez perdu!");
        console.log(`Le mot était : ${game.getWord()}`);
    }
}

playGame();