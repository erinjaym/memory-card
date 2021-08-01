import { useState, useEffect } from "react";
import GameBoard from "./component/GameBoard";
import ScoreBoard from "./component/ScoreBoard";


function App() {

const [score, setScore] = useState (0);
const [highScore, setHighScore] = useState (0);

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

  return (
    <div id="game-wrapper" className="game-wrapper">
      
      <ScoreBoard score={score} highScore={highScore}/>
      <GameBoard //slot1={} slot2={} slot3={} slot4={} slot5={} slot6={} slot7={} slot8={} slot9={}
      /> 
    </div>
  );
}

export default App;
