import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import getRandomWord from '/src/js/getRandomWord.js'


async function logWord(){
  const word = await getRandomWord()
  console.log(word)
}

export default function Home() {
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
                <input types="text" value="A" disabled />
                <input types="text" disabled />
                <input types="text" disabled />
                <input types="text" disabled />
                <input types="text" disabled />
                <input types="text" disabled />
                <div className={styles.details}>
                  <p className={styles.hint}>Hint</p>
                </div>
                <button className={styles.resetBtn} onClick={logWord}>Reset Game</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
