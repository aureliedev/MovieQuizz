import React, { useEffect, useState } from "react";
import Proposal from "./Proposal";

/****** COMPONENT GAME ********/
const Game = (props) => {
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false)


  useEffect(() => {
    let interval = null;
    /* regle du TIMER */
    interval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer => timer - 1);
        } else {
          setGameOver(true)
          clearInterval(interval);
        }
      }, 1000);
      
      if (gameOver) {
        /* GameOver, reset du timer */
        setTimer(0)
      }
      return () => clearInterval(interval);

  }, [timer]);

  /* Refresh la page pour REJOUER apres gameover */
  const handleClick = () => {
    window.location.reload(true)
  };

  const viewScoreIncrement = () => {
    const score = document.getElementById("score")

    score.classList.add("score")
    setInterval(() => {
      score.classList.remove("score")
    }, 50)
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
            <div id="score" className="score">
              Score: <b>{score}</b>
            </div>
          </div>
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
        <Proposal actors={props.actors} 
                  movies={props.movies} 
                  score={scoreUpdate => setScore(scoreUpdate)}
                  gameOver={gameOver => setGameOver(gameOver)} 
                  viewScoreIncr={viewScoreIncrement}
         />
      </div>
    </>
  );
};

export default Game;
