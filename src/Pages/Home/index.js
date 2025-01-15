import React from "react";
import MobileMenu from "../../Components/MobileMenu";
import logo from "../../Assets/Logo branca sem contorno.png";

import "./Home.css";

const Home = () => {
  return (
    <section className="containerHome">
      <header className="headerMenu">
        <img src={logo} alt="LOGO ArcBio" />

        <nav className="nav">
          <ul className="ul">
            <li className="li" style={{width: '80px'}}>
              <a href="#Serviços" className="link">
                Serviços
              </a>
            </li>
            <li className="li"style={{width: '80px'}}>
              <a href="#Portfólio" className="link">
                Portfólio
              </a>
            </li>
            <li className="li"style={{width: '165px'}}>
              <a href="#Entre em contato" className="link">
                Entre em contato
              </a>
            </li>
          </ul>
        </nav>

        <MobileMenu />
      </header>

      <section className="content">
        <h1>
          Arquitetura Sustentável e Exclusiva para Hotéis, Pousadas e
          Residências Litorâneas
        </h1>

        <div className="subTitle">
          <strong>Projetos de alto padrão</strong> que harmonizam estética rústica e
          funcionalidade em harmonia com a natureza.
        </div>

        <button className="buttonHome">Solicitar Reunião</button>
      </section>
    </section>
  );
};

export default Home;
