import { wordList } from "./wordList.js";
import NodeCache from "node-cache";

const cache = new NodeCache(); // Initialize the cache

export default function gameHandler(req, res) {
  const gameId = req.query.gameId;
  console.log("Query read gameId: ". gameId)

  let game = cache.get(gameId); // Get the game state from cache

  if (!game) {
    // If the game state is not in cache, initialize a new game
    const wordObj = getRandomWordObj();
    console.log("Word: ", wordObj)
    const guessedLetters = new Set();
    game = { wordObj, guessedLetters };
    cache.set(gameId, game); // Store the game state in cache
  }

  const { letter } = req.query;
  console.log("Letter from gameHandler: ", letter)

  // Check if the letter is in the word and add it to the set of guessed letters
  const isLetterInWord = game.wordObj.word.toUpperCase().includes(letter)
  console.log("is letter in word from gameHandler: ", isLetterInWord)
  game.guessedLetters.add(letter);
  cache.set(gameId, game); // Update the game state in cache

  // Send the game state back to the client
  res.status(200).json({ 
    guessedLetters: [...game.guessedLetters], 
    isLetterInWord, wordLength: 
    [game.wordObj.word.length], hint: 
    [game.wordObj.hint] });
}

function getRandomWordObj() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}