import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [word, setWord] = useState(null);

  useEffect(() => {
    fetch("/api/getRandomWord")
      .then((res) => res.json())
      .then((data) => setWord(data));
  }, []);

  return (
    <>
      <Head>
        <title>Glücksrad</title>
        <meta name="description" content="Applikation für die LB 151" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.gameWrapper}>
          <div className={styles.wrapper}>
            <h1>Guess the word</h1>
            <div className={styles.content}>
              <div className={styles.input}>
                {word &&
                  Array.from(word.word).map((letter, i) => (
                    <input type="test" value={letter} key={i} disabled />
                  ))}

                <div className={styles.details}>
                  <p className={styles.hint}>Hint</p>
                </div>
                <button className={styles.resetBtn}>Reset Game</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
