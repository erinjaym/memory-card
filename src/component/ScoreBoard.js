const ScoreBoard = (props) => {

return (
    <div id ="score" className="scoreboard">
        <div id="gameTitle" className="">Heisig Kanji Memory Game</div>
        <div>
            <div id="score" className="">
            Current Score:{props.score}
            </div>
            <div>
            Best Score:{props.highScore}
            </div>
        </div>
    </div>
);
}
export default ScoreBoard; 