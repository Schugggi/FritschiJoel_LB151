import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  // Zustandsvariablen initialisieren
  const [word, setWord] = useState(null);
  const [guess, setGuess] = useState("");
  const [gameId, setGameId] = useState(null);
  const [gameState, setGameState] = useState([]);
  const MAX_GUESS_LENGTH = 1;

  useEffect(() => {
    // Neue Spiel-ID generieren und Zustandsvariable aktualisieren
    const newGameId = Math.random().toString(36).substr(2, 9);
    console.log("Game ID: ", newGameId);
    setGameId(newGameId);

    // API-Anfrage an den Server senden, um den Spielzustand abzurufen
    fetch(`/api/gameHandler?gameId=${gameId}`)
      .then((req) => req.json())
      .then((data) => {
        setGameState(data);
      });
  }, []);

  const handleGuess = (gameId, letter) => {
    // Funktion zum Raten eines Buchstabens
    const letterRegex = /^[a-zA-Z]$/;
    if (!letter || !letter.match(letterRegex)) {
      // Wenn der Buchstabe null, undefined oder nicht dem regulären Ausdruck entspricht, wird kein Rateversuch an den Server gesendet
      return;
    }
    // API-Anfrage an den Server senden, um den Spielzustand mit dem geratenen Buchstaben zu aktualisieren
    fetch(`/api/gameHandler?gameId=${gameId}&letter=${letter.toUpperCase()}`)
      .then((req) => req.json())
      .then((data) => {
        if (data.isLetterInWord) {
          // Wenn der geratene Buchstabe im Wort enthalten ist, wird sein Index im geratenen Buchstabenarray gespeichert          const guessedLetters = [...data.guessedLetters];
          const index = data.word.indexOf(letter.toUpperCase());
          guessedLetters[index] = letter.toUpperCase();
          data.guessedLetters = guessedLetters;
        }
        // Zustandsvariable mit dem aktualisierten Spielzustand aktualisieren
        setGameState(data);
      });
  };

  // Funktion zum Rendern der Eingabefelder für geratene Buchstaben
  const renderInputFields = (gameState) => {
    const inputFields = [];
    for (let i = 0; i < gameState.wordLength; i++) {
      const guessedLetter = gameState.guessedLetters[i];
      const inputValue = guessedLetter ? guessedLetter : "";
      inputFields.push(
        <input type="text" maxLength="1" key={i} value={inputValue} disabled />
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
            <a className={styles.links} href="/">
              Home
            </a>
            <a className={styles.links} href="/admin">
              Admin
            </a>
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
                  const newGuess = e.target.value
                    .toUpperCase()
                    .slice(0, MAX_GUESS_LENGTH);
                  setGuess(newGuess);
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
