import { useState, useEffect } from "react";

const ScoreBoard = (prop) => {
const [score, setScore] = useState ("0");

return (
    <div id ="score" className="scoreboard">
        <div id="gameTitle" className="">Memory Matching Game</div>
        <div>
            <div id="score" className="">
            Current Score:{}
            </div>
            <div>
            Best Score: {}
            </div>
        </div>
    </div>
);
}
export default ScoreBoard; 