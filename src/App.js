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

function Randomizer () {
  let min = Math.ceil(9);
  let max = Math.floor(1);
  return Math.floor(Math.random() * (max - min +1) + min);
}

function shiftCards () {
  let shiftBy = Randomizer();
  let flashCardArray = flashCards;
  for (let shiftTimes = 0; shiftTimes < shiftBy; shiftTimes ++){
      flashCardArray.unshift(flashCardArray[8]);
      flashCardArray.pop();
  }
  return setFlashCards(flashCardArray);
}

const selectCard = (cardId) => {
    //may be issues due to how selected is set not in state? 
  if (flashCards.[cardId].selected){
    // do something to reset game?
    alert ('you have failed your mission!');
    return false;
  }else {
    console.log(flashCards[cardId].selected);
    flashCards[cardId].selected = true; 
    console.log(flashCards[cardId].selected);
    setFlashCards (flashCards);
    return true;
  }
}


const selectedCard = (arrayId) => {
  // change the specific card to selected
  if (selectCard(arrayId)){
    addPoints();
    shiftCards();
    return console.log('did eet');
  }else {
    alert('game over for you');
    gameReset();
  }
}

  return (
    <div id="game-wrapper" className="game-wrapper">
      <ScoreBoard score={score} highScore={highScore}/>
      <GameBoard flashCardList={flashCards} selectCard={selectedCard}
      /> 
    </div>
  );

}

export default App;
