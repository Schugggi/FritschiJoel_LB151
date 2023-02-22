import wordList from '/src/api/words.js'

const words = wordList()

export default async function getRandomWordObj(){
    let ranObj = words[Math.floor(Math.random() * words.length)];
    return ranObj
}