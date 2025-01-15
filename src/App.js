import React from "react";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Portifolio from "./Pages/Portifolio";
import Servicos from "./Pages/Servicos";

import "./App.css";
import Clientes from "./Pages/Clientes";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Sobre />
      <Portifolio />
      <Servicos />
      <Clientes />
    </div>
  );
};

export default App;
