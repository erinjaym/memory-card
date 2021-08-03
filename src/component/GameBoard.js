
const GameBoard = (props)  => { 
    let flashCardArray = (props.flashCardList);

return (
    <div id="gameboard" className="gameboard">
        <img onClick={() => props.selectCard(0)} alt="flashcard1" src={flashCardArray[0].source} />
        <img onClick={() => props.selectCard(1)} alt="flashcard2" src={flashCardArray[1].source} />
        <img onClick={() => props.selectCard(2)} alt="flashcard3" src={flashCardArray[2].source} />
        <img onClick={() => props.selectCard(3)} alt="flashcard4" src={flashCardArray[3].source} />
        <img onClick={() => props.selectCard(4)} alt="flashcard5" src={flashCardArray[4].source} />
        <img onClick={() => props.selectCard(5)} alt="flashcard6" src={flashCardArray[5].source} />
        <img onClick={() => props.selectCard(6)} alt="flashcard7" src={flashCardArray[6].source} />
        <img onClick={() => props.selectCard(7)} alt="flashcard8" src={flashCardArray[7].source} />
        <img onClick={() => props.selectCard(8)} alt="flashcard9" src={flashCardArray[8].source} />
        <img onClick={() => props.selectCard(9)} alt="flashcard9" src={flashCardArray[9].source} />
        <img onClick={() => props.selectCard(10)} alt="flashcard9" src={flashCardArray[10].source} />
        <img onClick={() => props.selectCard(10)} alt="flashcard9" src={flashCardArray[11].source} />
    </div>
);
} 
export default GameBoard;