const GameLossWindow = (props) => {

return (
    <div id="gameEndPopup"className="game-end-popup">
        <center>残念！　You've already selected that one! <br /><br />
        Your score was: <font color={"green"}>{props.score}</font> <br />
        Current high score: <font color={"green"}>{props.highScore}</font> <br /><br />
        Keep at it! 　頑張って！ <br /><br /></center>
        <center><button onClick={props.endGame}>Okay</button></center>
    </div>
    );
}
export default GameLossWindow; 