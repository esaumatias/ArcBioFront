import React from "react";

import "./Servicos.css";
import FadeInOnScroll from "../../Components/FadeInOnScroll";

const Servicos = () => {
  return (
    <section className="containerServicos" id="Serviços">
      <FadeInOnScroll>
        <div className="header">
          <div className="subTitle">Nossos</div>
          <div className="title">serviços</div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="containerCard">
          <FadeInOnScroll>
            <div className="card1">
              <div className="line"></div>
              <div className="title">Consultoria Imobiliária</div>
              <div className="subTitle">Escolha do terreno ou imóvel ideal</div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="card2">
              <div className="title">
                Projetos Arquitetônicos e de Interiores
              </div>
              <div className="subTitle">Personalizados para cada cliente.</div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="card1">
              <div className="line"></div>
              <div className="title">Gerenciamento de Obras</div>
              <div className="subTitle">
                Acompanhamento completo para garantir qualidade e eficiência.
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="card2">
              <div className="title">Gestão de Rentabilização de Imóveis</div>
              <div className="subTitle">
                Estratégias para valorizar e rentabilizar propriedades.
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Servicos;
