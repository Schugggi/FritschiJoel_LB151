import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import getRandomWordObj from '../../src/api/getRandomWordObj.js'
import { useState, useEffect } from 'react'




export default function Home() {

  const [cnt, setCnt] = useState();
  const [word, setWord] = useState();


  async function fetchWord(){
    return await getRandomWordObj()
  }

  useEffect(() => {
    fetchWord().then(res => {
      setWord(res)
    })
  }, [])

  const bla = () => console.log(6)

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
              {word?.word.split("").map((val, i, arr) => 
                <input type="text" disabled/>
              )}
                
                <div className={styles.details}>
                  <p className={styles.hint}>Hint</p>
                </div>
                <button className={styles.resetBtn} >Reset Game</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
