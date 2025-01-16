import React from "react";
import imageCasal from "../../Assets/fundadores-arcbio-fabio-inaimo-cristina-lapas-01.png";
import casa from "../../Assets/casa-de-praia-rustica-alto-padrao-arcbio.png";
import iconFolha from "../../Assets/folha.png";
import iconBrasil from "../../Assets/brasil.svg";
import iconCasa from "../../Assets/plano-de-construcao.svg";

import "./Sobre.css";
import FadeInOnScroll from "../../Components/FadeInOnScroll";

const Sobre = () => {
  return (
    <section className="containerSobre">
      <div className="checkMobile">
        <div className="containerFundadores">
          <FadeInOnScroll>
            <div className="left">
              <div className="subTitle">Sobre a ArcBio</div>
              <div className="title">Excelência em Arquitetura Sustentável</div>
              <div className="containerText">
                <span>
                  Com mais de <strong>12 anos de experiência</strong>, a ArcBio
                  é especialista em criar refúgios exclusivos de alto padrão,
                  unindo design personalizado, funcionalidade e estratégias
                  inteligentes.
                </span>

                <span>
                  Atendemos{" "}
                  <strong>
                    {" "}
                    hotéis, pousadas, condomínios e residências litorâneas
                  </strong>
                  , agregando valor aos empreendimentos e proporcionando
                  experiências únicas para moradores e hóspedes.
                </span>

                <span>
                  Nascida da união entre o arquiteto Fábio Inaimo e a bióloga
                  Cristina Lapas, a ArcBio combina <strong>arquitetura</strong>{" "}
                  e <strong>meio ambiente</strong> de forma singular. Após
                  deixarem os grandes centros urbanos, encontraram na Praia de
                  Pipa - RN o lugar perfeito para transformar sonhos em projetos
                  que harmonizam estética, natureza e sustentabilidade.
                </span>

                <span>
                  Cada projeto carrega nossa <strong>essência</strong>: espaços
                  que vão além da arquitetura, oferecendo exclusividade,
                  equilíbrio e um novo conceito de viver.
                </span>
              </div>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="rigth">
              <img src={imageCasal} alt="Imagem dos fundadores" />
            </div>
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll>
          <div className="containerInfos">
            <div className="card">
              <div className="titleCard">+12</div>
              <div className="subTitleCard">anos de experiência no mercado</div>
            </div>
            <div className="line"></div>
            <div className="card">
              <img src={iconCasa} alt="" className="iconCard" />
              <div className="subTitleCard">
                Consultoria e execução integradas
              </div>
            </div>
            <div className="line"></div>
            <div className="card">
              <img src={iconBrasil} alt="" className="iconCard" />
              <div className="subTitleCard">
                Projetos realizados em todo o Brasil
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      <div className="arcBioChoiceContainer">
        <FadeInOnScroll>
          <div className="header">
            <div className="subTitle">Por que</div>
            <div className="title">escolher a ArcBio?</div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="content">
            <img
              src={casa}
              alt="imagem de casa de praia rustica"
              className="imageCasa"
            />
            <div className="containerCard">
              <div className="card">
                <img src={iconFolha} alt="icone folha" />
                <div className="containerText">
                  <div className="title">Refúgios Sofisticados</div>
                  <div className="subTitle">
                    Espaços pensados para proporcionar conforto, estética e
                    conexão com a natureza.
                  </div>
                </div>
              </div>

              <div className="card">
                <img src={iconFolha} alt="icone folha" />
                <div className="containerText">
                  <div className="title">Design Rústico e Elegante</div>
                  <div className="subTitle">
                    Combinação de materiais nobres e soluções inteligentes.
                  </div>
                </div>
              </div>

              <div className="card">
                <img src={iconFolha} alt="icone folha" />
                <div className="containerText">
                  <div className="title">Parceria Completa</div>
                  <div className="subTitle">
                    Acompanhamento em todas as etapas, da aquisição do imóvel à
                    construção e rentabilização.
                  </div>
                </div>
              </div>

              <button className="buttonCard">Solicitar Reunião</button>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Sobre;
