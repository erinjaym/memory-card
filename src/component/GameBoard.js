import { useState, useEffect } from "react";

const GameBoard = (props)  => { 
    const [flashCardArray, setFlashCardArray] = useState (props.flashCardList);

    useEffect (() => {

    });

    function Randomizer () {
        let min = Math.ceil(9);
        let max = Math.floor(1);
        return Math.floor(Math.random() * (max - min +1) + min);
    }


    function shiftCards () {
        let shiftBy = Randomizer();
        for (let shiftTimes = 0; shiftTimes < shiftBy; shiftTimes ++){
            flashCardArray.unshift(flashCardArray[3]);
            flashCardArray.pop();
        }
    }
  
  

return (
    <div id="gameboard" className="gameboard">
        <div id="0"><img src={flashCardArray[0].source} /></div>
        <div id="1"><img src={flashCardArray[1].source} /></div>
        <div id="2"><img src={flashCardArray[2].source} /></div>
        <div id="3"><img src={flashCardArray[3].source} /></div>
        <div id="4"><img src={flashCardArray[4].source} /></div>
        <div id="5"><img src={flashCardArray[5].source} /></div>
        <div id="6"><img src={flashCardArray[6].source} /></div>
        <div id="7"><img src={flashCardArray[7].source} /></div>
        <div id="8"><img src={flashCardArray[8].source} /></div>
    </div>
);
} 
export default GameBoard;