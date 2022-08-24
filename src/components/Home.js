import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {

    return (
        <>
      <div className="main-container">
        <div className="main-header">
          <h1>MOVIE QUIZZ 🍿</h1>
        </div>
        <div className="main-card">
          <h2>Le principe du jeu:</h2>
          <p>A chaque round, on présente un acteur et une affiche de film.</p>
          <p>Le joueur doit dire si l'acteur a joué dans le film présenté.</p>
          <p>A la première mauvaise réponse c'est GameOver, sinon le jeu continue.</p>
          <div className="button-play">
          <Link to="/game">PLAY 🎬</Link></div>
        </div>
      </div>
    </>
    );
};

export default Home;