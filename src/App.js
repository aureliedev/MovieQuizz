import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import useSWR from "swr"; /*HOOK pr récupérer de la data URL & API */

const fetcher = (url) => fetch(url).then((res) => res.json());

/****** FONCTION APP ********/
const App = () => {
  /*Récup les 20 acteurs les + populaires */
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/person/popular?api_key=eb553d0ae0d677efb0e511568c1b789a&language=en-US&page=1",
    fetcher
  );

  const actors = [];
  const movies = [];

  /* Si erreur on STOP */
  if (error) return <div>Erreur de chargement</div>;
  if (!data) return <div>Chargement...</div>;
  /* Si OK on récupère la data */
  if (data) {
    const actorsResults = [...data.results];

    actorsResults.forEach((actor) => {
      actors.push({
        id: actor.id,
        name: actor.name,
        picture: actor.profile_path,
        movies: actor.known_for.map((movie) => movie.title).filter(Boolean),
      });

      actor.known_for.forEach((movie) => {
        movies.push({
          id: movie.id,
          poster: movie.poster_path,
          name: movie.title,
        });
      });
    });
  }

  /****** RENDU VISUEL ********/
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/game"
          exact
          element={
            <Game
              actors={actors.filter((actor) => actor.movies.length > 0)}
              movies={movies.filter((movie) => movie.name !== undefined)}
            />
          }
        />
        <Route path="*" exact element={<Home />} /> {/* Redirection Home */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
