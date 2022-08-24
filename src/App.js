import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
//import useSWR from "swr"; /*HOOK pr récupérer de la data URL & API */


/****** FONCTION APP ********/
const App = () => {

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
            />
          }
        />
        <Route path="*" exact element={<Home />} /> {/* Redirection Home */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
