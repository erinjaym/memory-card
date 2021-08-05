const ScoreBoard = (props) => {

return (
    <div id ="score" className="scoreboard">
        <div id="game-title" className="title">Heisig Kanji Memory Game<div className="instructions">Get points by clicking a new Kanji each time.</div></div>
        <div>
            <div id="score" className="score">
            Current Score:{props.score}
            </div>
            <div id="highscore" className="score" >
            Best Score:{props.highScore}
            </div>
        </div>
    </div>
);
}
export default ScoreBoard; 