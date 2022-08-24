import React, { useEffect, useState } from "react";

/****** COMPONENT GAME ********/
const Game = (props) => {

  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer => timer - 1);
        } 
      }, 1000);
      return 

  }, [timer]);

  /****** RENDU VISUEL ********/
  return (
    <>
      <div className="main-container">
        <div className="main-header">
          <h1>MOVIE QUIZZ</h1>
        </div>
        <div className="main-card">
          <div className="timerscore">
            <div className="timer">Temps: {timer}</div>
            <div className="score">SCORE</div>
          </div>
          <h4>Cet acteur a t'il joué dans ce film ? 🍿</h4>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
