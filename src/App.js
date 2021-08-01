import React, { Component } from "react";
import GameBoard from "./component/GameBoard";
import ScoreBoard from "./component/ScoreBoard";

function App() {

  return (
    <div id="game-wrapper" className="game-wrapper">
      <ScoreBoard />
      <GameBoard /> 
    </div>
  );
}

export default App;
