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
  const [proposalList, setProposalList] = useState();
  const [proposalCount, setProposalCount] = useState();

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

  /****** RENDU VISUEL ********/
  return (
    <>
      <div className="main-card-proposal">
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
    </>
  );
};

export default Proposal;