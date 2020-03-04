const Letter = require("./Letter");

// The Word class is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly
class Word {
    constructor(word) {
        this.letters = word.split("").map(char => Letter(char));
    }

    getSolution() {
        return this.letters.map(
            letter => Letter.getSolution())
            .join("");
    }

    toString() {
        this.letters.join(" ");

    }

    guessLetter() {

    }

    guessedCorrectly() {

    }



}

module.exports = Word;
