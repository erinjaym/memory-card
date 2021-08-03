import { useState, useEffect } from "react";
import GameBoard from "./component/GameBoard";
import ScoreBoard from "./component/ScoreBoard";
import FlashCardData from "./component/FlashCardData";

function App() {

const [score, setScore] = useState (0);
const [highScore, setHighScore] = useState (0);
const [flashCards, setFlashCards] = useState (FlashCardData);


useEffect (() => {
  const setTheHighScore = () => {
    if (highScore < score){
      return setHighScore ( score );
    }else {
      return;
    }
  }
  setTheHighScore();
});

const gameReset = () => {
  setFlashCards (FlashCardData);
  setScore (0);
}

const addPoints = () => {
  setScore (score + 1);
}

function randomNumberPicker () {
  let min = Math.ceil(9);
  let max = Math.floor(1);
  return Math.floor(Math.random() * (max - min +1) + min);
}

function shiftCards () {
  let shiftBy = randomNumberPicker();
  let flashCardArray = flashCards;
  for (let shiftTimes = 0; shiftTimes < shiftBy; shiftTimes ++){
      flashCardArray.unshift(flashCardArray[8]);
      flashCardArray.pop();
  }
  return setFlashCards(flashCardArray);
}

const selectCard = (cardId) => {
  if (flashCards.[cardId].selected){
    return false;
  }else {
    let flashCardsNew = flashCards;
    flashCardsNew[cardId].selected = true; 
    setFlashCards (flashCardsNew);
    return true;
  }
}

const decideSelectionResults = (arrayId) => {
  if (selectCard(arrayId)){
    addPoints();
    shiftCards();
    return console.log('did eet');
  }else {
    alert('残念 YOU ALREADY SELECTED THAT ONE!');
    gameReset();
  }
}

  return (
    <div id="game-wrapper" className="game-wrapper">
      <ScoreBoard score={score} highScore={highScore}/>
      <GameBoard flashCardList={flashCards} selectCard={decideSelectionResults}
      /> 
    </div>
  );

}

export default App;
