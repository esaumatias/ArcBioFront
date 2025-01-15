import React from "react";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Portifolio from "./Pages/Portifolio";
import Servicos from "./Pages/Servicos";

import "./App.css";
import Clientes from "./Pages/Clientes";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Sobre />
      <Portifolio />
      <Servicos />
      <Clientes />
      <Footer />
    </div>
  );
};

export default App;
