import { wordList } from "./wordList.js";

import NodeCache from "node-cache";

const cache = new NodeCache();

// Definiere die Funktion, die für Anfragen an den Server nach einem Spielzustand zuständig ist
export default function gameHandler(req, res) {
  const gameId = req.query.gameId;
  console.log("Query read gameId: ", gameId);

  let game = cache.get(gameId);

  // Wenn der Spielzustand nicht im Cache vorhanden ist, initialisiere ein neues Spiel
  if (!game) {
    const wordObj = getRandomWordObj();
    console.log("Word: ", wordObj);

    const guessedLetters = new Set();

    game = { wordObj, guessedLetters };

    cache.set(gameId, game);
  }

  // Lese den geratenen Buchstaben aus der Anfrage aus
  const { letter } = req.query;
  console.log("Letter from gameHandler: ", letter);

  // Überprüfe, ob der Buchstabe im Wort enthalten ist, und füge ihn dem Set der geratenen Buchstaben hinzu
  const isLetterInWord = game.wordObj.word.toUpperCase().includes(letter);
  console.log("is letter in word from gameHandler: ", isLetterInWord);
  game.guessedLetters.add(letter);

  cache.set(gameId, game);

  // Sende den Spielzustand als JSON-Antwort an den Client zurück
  res.status(200).json({
    guessedLetters: [...game.guessedLetters],
    isLetterInWord,
    wordLength: [game.wordObj.word.length],
    hint: [game.wordObj.hint],
  });
}

// Diese Funktion wählt ein zufälliges Wort aus der Liste aus
function getRandomWordObj() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}
