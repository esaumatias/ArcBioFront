import React from "react";
import MobileMenu from "../../Components/MobileMenu";
import logo from "../../Assets/Logo branca sem contorno.png";

import "./Home.css";
import FadeInOnScroll from "../../Components/FadeInOnScroll";

const Home = () => {
  return (
    <section className="containerHome">
      <header className="headerMenu">
        <img src={logo} alt="LOGO ArcBio" />

        <nav className="nav">
          <ul className="ul">
            <li className="li" style={{ width: "80px" }}>
              <a href="#Serviços" className="link">
                Serviços
              </a>
            </li>
            <li className="li" style={{ width: "80px" }}>
              <a href="#Portfólio" className="link">
                Portfólio
              </a>
            </li>
            <li className="li" style={{ width: "165px" }}>
              <a href="#Entre em contato" className="link" onClick={() =>
      window.open(
        "https://api.whatsapp.com/send/?phone=558432464285&text=Ol%C3%A1%2C+ArcBio%21+Quero+saber+mais+sobre+seus+projetos+exclusivos+e+servi%C3%A7os.+Poderiam+me+ajudar%3F&type=phone_number&app_absent=0",
        "_blank"
      )
    }>
                Entre em contato
              </a>
            </li>
          </ul>
        </nav>

        <MobileMenu />
      </header>
      <section className="content">
        <FadeInOnScroll>
          <h1>
            Arquitetura Sustentável e Exclusiva para Hotéis, Pousadas e
            Residências Litorâneas
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={200}>
          <div className="subTitle">
            <strong style={{ color: "#fff" }}>Projetos de alto padrão</strong>{" "}
            que harmonizam estética rústica e funcionalidade em harmonia com a
            natureza.
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll delay={400}>
          <button
            className="buttonHome"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=558432464285&text=Ol%C3%A1%2C+ArcBio%21+Quero+saber+mais+sobre+seus+projetos+exclusivos+e+servi%C3%A7os.+Poderiam+me+ajudar%3F&type=phone_number&app_absent=0",
                "_blank"
              )
            }
          >
            Solicitar Reunião
          </button>
        </FadeInOnScroll>
      </section>
    </section>
  );
};

export default Home;
