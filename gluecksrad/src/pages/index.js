import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [word, setWord] = useState(null);
  const [guess, setGuess] = useState("");
  const [gameId, setGameId] = useState(null);
  const [gameState, setGameState] = useState([]);
  const MAX_GUESS_LENGTH = 1;

  useEffect(() => {
    const newGameId = Math.random().toString(36).substr(2, 9);
    console.log("Game ID: ", newGameId);
    setGameId(newGameId);
    fetch(`/api/gameHandler?gameId=${gameId}`)
      .then((req) => req.json())
      .then((data) => {
        setGameState(data);
      });
  }, []);

  const handleGuess = (gameId, letter) => {
    const letterRegex = /^[a-zA-Z]$/; // Regular expression to match a single alphabetical character
    if (!letter || !letter.match(letterRegex)) {
      // If the letter is null, undefined, or does not match the regex, do not send a guess to the server
      return;
    }
    fetch(`/api/gameHandler?gameId=${gameId}&letter=${letter.toUpperCase()}`)
      .then((req) => req.json())
      .then((data) => {
        if (data.isLetterInWord) {
          // If the guessed letter is in the word, add its index to the guessedLetters array
          const guessedLetters = [...data.guessedLetters];
          const index = data.word.indexOf(letter.toUpperCase());
          guessedLetters[index] = letter.toUpperCase();
          data.guessedLetters = guessedLetters;
        }
        setGameState(data);
      });
  };
  

  const renderInputFields = (gameState) => {
    const inputFields = [];
    for (let i = 0; i < gameState.wordLength; i++) {
      const guessedLetter = gameState.guessedLetters[i];
      const inputValue = guessedLetter ? guessedLetter : "";
      inputFields.push(
        <input
          type="text"
          maxLength="1"
          key={i}
          value={inputValue} 
          disabled
        />
      );
    }
    return inputFields;
  };
  
  
  
  
  
  
  

  return (
    <>
      <Head>
        <title>Glücksrad</title>
        <meta name="description" content="Applikation für die LB 151" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.header}>
          <p className={styles.logo}>Glücksrad</p>
          <div className={styles.headerright}>
            <a className={styles.links} href="/">Home</a>
            <a className={styles.links} href="/admin">Admin</a>
          </div>
        </div>

        <div className={styles.gameWrapper}>
          <div className={styles.wrapper}>
            <h1>Guess the word</h1>
            <div className={styles.content}>
              <div className={styles.input}>
              {renderInputFields(gameState)}
                <div className={styles.details}>
                  <p className={styles.hint}>Hint: {gameState.hint}</p>
                  <p className={styles.guessedLetters}>
                    Guessed Letters: {gameState.guessedLetters}
                  </p>
                  <p className={styles.wordLength}>
                    Word Length: {gameState.wordLength}
                  </p>
                </div>
              </div>
              <input
                type="text"
                value={guess}
                maxLength="1"
                onChange={(e) => {
                  const newGuess = e.target.value.toUpperCase().slice(0, MAX_GUESS_LENGTH)
                  setGuess(newGuess)
                }}
              />
              <button
                className={styles.resetBtn}
                onClick={() => handleGuess(gameId, guess)}
              >
                Guess
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
