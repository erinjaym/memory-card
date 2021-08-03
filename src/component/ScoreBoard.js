const ScoreBoard = (props) => {

return (
    <div id ="score" className="scoreboard">
        <div id="gameTitle" className="title">Heisig Kanji Memory Game</div>
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