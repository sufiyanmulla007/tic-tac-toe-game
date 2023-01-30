import React from 'react'
import "../Style/ScoreBoard.css";
const ScoreBoard = ({ xScore, oScore, xPlaying, tie }) => {
  return (
    <>
     {/* <h2>tic tac game</h2> */}
     <div className="scoreboard">
      <span className={`x-score ${xPlaying === true ? "xScoreboard" : ""}`}>
       Player X - {xScore}
      </span>
      <span className={`o-score ${xPlaying === false ? "oScoreboard" : ""}`}>
      Player  O - {oScore}
      </span>
      <span className={`o-tie ${tie > 0 ? "oTie" : ""}`}>Tie - {tie}</span>
    </div>
    </>
  );
};

export default ScoreBoard;
