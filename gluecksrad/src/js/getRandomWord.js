import wordList from '/src/js/words.js'

const words = wordList()

export default async function getRandomWord(){
    let ranObj = words[Math.floor(Math.random() * words.length)];
    return ranObj
}