import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game" exact element={<Game />} />
        <Route path="*" exact element={<Home />} /> {/* Redirection Home */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
