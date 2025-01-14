import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import Sobre from "./Pages/Sobre";
import Portifolio from "./Pages/Portifolio";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Sobre />
      <Portifolio />
    </div>
  );
};

export default App;
