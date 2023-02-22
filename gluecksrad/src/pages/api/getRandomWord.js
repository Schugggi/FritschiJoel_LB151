import { wordList } from "./wordList.js";

export default async function getRandomWord(_, res) {
//   console.log("Word list: ", wordList)
  const ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  const wordObj = { word: ranObj.word };
  res.statusCode = 200;
  res.json(wordObj);
}
