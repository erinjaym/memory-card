import { useState, useEffect } from "react";
import GameBoard from "./component/GameBoard";
import ScoreBoard from "./component/ScoreBoard";
import FlashCardData from "./component/FlashCardData";

function App() {

const [score, setScore] = useState (0);
const [highScore, setHighScore] = useState (0);
const [flashCards, setFlashCards] = useState (FlashCardData);


useEffect (() => {
// maybe use .map to change all of the cards Location accordingly
//setSlot1 ({source: Fire});

});

const imageSelection = (img) => {
}

// only called if image does not match prevously selected images 
// each image object has a true false value assigned to track this ?
const addPoints = () => {
  setScore (score + 1);
}

  // call after each click ?? after each onMount? 
const setTheHighScore = (newScore) => {
    if (highScore < newScore){
      return setHighScore ( newScore );
    }else {
      return;
    }
}

const checkSelection = (imgObject) => {
  if (imgObject.selected === false){
    addPoints();
    //setHighScore ? 
    return; //need to mark imgObject as selected on return
  }else{
    // restart game 
  }
}

const selectedImage = (imageObject) => {
  // ...slot1 Source: Wind? 
}

  return (
    <div id="game-wrapper" className="game-wrapper">
      
      <ScoreBoard score={score} highScore={highScore}/>
      <GameBoard flashCardList={flashCards} selectedImage={selectedImage}//slot2={} slot3={} slot4={} slot5={} slot6={} slot7={} slot8={} slot9={}
      /> 
    </div>
  );

}

export default App;
