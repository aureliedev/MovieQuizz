import React, { useEffect, useState } from "react";
/**
 * Mélange aléatoire d'un tableau
 * @param {*} array tableau de la fonction handleMix
 */
 function handleMix(array) {
    for (let b = array.length - 1; b > 0; b--) {
      let c = Math.floor(Math.random() * (b + 1));
      [array[b], array[c]] = [array[c], array[b]];
    }
    return array
  }
/****** COMPONENT PROPOSAL ********/
const Proposal = (props) => {
  const [proposalList, setProposalList] = useState([]);
  const [proposalCount, setProposalCount] = useState(0);
  const [score, setScore] = useState(0)


  useEffect(() => {
    const proposal = [];
    
   /* Acteurs aléatoires */
   handleMix(props.actors)
    
   props.actors.forEach(actor => {
     const random = Math.random()

     if (random > 0.5) {
       const index = Math.floor(Math.random() * actor.movies.length)
       const indexInMoviesList = props.movies.map(movie => movie.name).indexOf(actor.movies[index])
       proposal.push({
         actor: actor.name,
         movie: actor.movies[index],
         portrait: actor.picture,
         poster: props.movies[indexInMoviesList].poster
       })
     } 

     else {
       const index = Math.floor(Math.random() * props.movies.length)
       proposal.push({
         actor: actor.name,
         movie: props.movies[index].name,
         portrait: actor.picture,
         poster: props.movies[index].poster
       })
     }
   })

   setProposalList(proposal)
 }, [])

  /**
   * Fonction du jeu, déclenchée lorsque l'utilisateur répond
   * @param {*} yes booléen, la réponse de l'utilisateur
   * @param {*} actor l'acteur dans la question
   * @param {*} movie le film dans la question
   */
    const answerFetch = (yes, actor, movie) => {
    fetch('https://api.themoviedb.org/3/person/' + actor.id + '/movie_credits?api_key=eb553d0ae0d677efb0e511568c1b789a&language=en-US', {
        method: "GET",
        dataType: "JSON",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
      }
    })
    .then(res => res.json())
    .then(data => {
        const isOk = data.cast.find(actorMovie => actorMovie.title === movie)
    // Si c'est correct 
    if ((yes && isOk) || (!yes && !isOk)) {
        setScore(score+1)
        props.score(score+1)
        props.viewScoreIncr()
      } else {
        props.gameOver(true)
      }

      /* Stop avant la derniere question */
      if (proposalCount < proposalList.length) {
        setProposalCount(proposalCount+1)
      } else {
        setProposalCount(0)
      }
    })
}

  /****** RENDU VISUEL ********/
  return (
    proposalList.length > 0 ?
    (<>
      <div className="main-card-proposal">
        <h4>Est-ce que <b>{proposalList[proposalCount].actor}</b> a joué dans <b>{proposalList[proposalCount].movie}</b> ? 🍿</h4>
        <div className="section-card">
          <div className="img-container">
            <img src={"http://image.tmdb.org/t/p/w185" + proposalList[proposalCount].portrait} alt="actor"/>
          </div>
          <div className="img-container">
            <img src={"http://image.tmdb.org/t/p/w185" + proposalList[proposalCount].poster} alt="movie"/>
          </div>
        </div>
        <div className="section-card">
          <button className="button-yes" onClick={() => answerFetch(true, props.actors[proposalCount], proposalList[proposalCount].movie)}>✔️ OUI</button>
          <button className="button-no" onClick={() => answerFetch(false, props.actors[proposalCount], proposalList[proposalCount].movie)}>✖️ NON</button>
        </div>
      </div>
    </>)
    :
    <div>LOADIIIIIIIING</div>
  );
};

export default Proposal;