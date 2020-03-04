const inquirer = require("inquirer");
const Word = require("./Word");
const words = require("./words");

// The Game constructor is responsible for keeping score and controlling the flow of the overall game
class Game {
    constructor() {
        this.guessesLeft = 0;
    }

    play() {
        this.guessesLeft = 10;
        this.nextWord();
    }

    nextWord () {

    }

    makeguess() {

    }

    askToPlayAgain() {

    }

    askForLetter () {

    }

    quit() {
        console.log("Goodbye!");
        process.exit(0);
    }



}

module.exports = Game;
