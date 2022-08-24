import React, { useEffect, useState } from "react";
import Proposal from "./Proposal";

/****** COMPONENT GAME ********/
const Game = (props) => {
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false)


  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      if (timer > 0) {
        setTimer((timer) => timer - 1);
      }
    }, 1000);
    return;
  }, [timer]);

  /* Refresh la page pour rejouer */
   function handleClick() {
    window.location.reload(true)
  }

  /****** RENDU VISUEL ********/
  return (
    <>
      <div className="main-container-game">
        <div className="main-header-game">
          <h1>MOVIE QUIZZ</h1>
        </div>
        <div className="main-card-game">
          <div className="timerscore">
            <div className="timer">
              Temps: <b>{timer}</b>
            </div>
            <div className="score">
              Score: <b>{score}</b>
            </div>
          </div>
          {/* <h4>Cet acteur a t'il joué dans ce film ? 🍿</h4>
          <div className="section-card">
            <div className="img-container">
              <div className="image">IMAGE ICI</div>
            </div>
            <div className="img-container">
              <div className="image">IMAGE ICI</div>
            </div>
          </div>
          <div className="section-card">
            <div className="button-yes">✔️ OUI</div>
            <div className="button-no">✖️ NON</div>
          </div> */}
        </div>
        <div className="game-over-container">
        {gameOver ? 
          <div className="game-over">
            <h1>GAME OVER !</h1>
            <div className="game-over-score">Score: <b>{score}</b></div>
            <button className="button-play-again" onClick={handleClick}>REJOUER</button>
          </div>
          : "hidden"}
        </div>
        <Proposal />
      </div>
    </>
  );
};

export default Game;
