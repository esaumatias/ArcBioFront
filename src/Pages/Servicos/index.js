import React from "react";

import "./Servicos.css";

const Servicos = () => {
  return (
    <section className="containerServicos">
      <div className="header">
        <div className="subTitle">Nossos</div>
        <div className="title">serviços</div>
      </div>

      <div className="containerCard">
        <div className="card1">
          <div className="line"></div>
          <div className="title">Consultoria Imobiliária</div>
          <div className="subTitle">Escolha do terreno ou imóvel ideal</div>
        </div>

        <div className="card2">
          <div className="title">Projetos Arquitetônicos e de Interiores</div>
          <div className="subTitle">Personalizados para cada cliente.</div>
        </div>

        <div className="card1">
          <div className="line"></div>
          <div className="title">Gerenciamento de Obras</div>
          <div className="subTitle">
            Acompanhamento completo para garantir qualidade e eficiência.
          </div>
        </div>

        <div className="card2">
          <div className="title">Gestão de Rentabilização de Imóveis</div>
          <div className="subTitle">
            Estratégias para valorizar e rentabilizar propriedades.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
