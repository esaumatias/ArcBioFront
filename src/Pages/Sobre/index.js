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
              <div className="title">
                <FadeInOnScroll>
                  Excelência em Arquitetura Sustentável
                </FadeInOnScroll>
              </div>
              <div className="containerText">
                <FadeInOnScroll>
                  <span>
                    Com mais de <strong>12 anos de experiência</strong>, a
                    ArcBio é especialista em criar refúgios exclusivos de alto
                    padrão, unindo design personalizado, funcionalidade e
                    estratégias inteligentes.
                  </span>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <span>
                    Atendemos{" "}
                    <strong>
                      {" "}
                      hotéis, pousadas, condomínios e residências litorâneas
                    </strong>
                    , agregando valor aos empreendimentos e proporcionando
                    experiências únicas para moradores e hóspedes.
                  </span>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <span>
                    Nascida da união entre o arquiteto Fábio Inaimo e a bióloga
                    Cristina Lapas, a ArcBio combina{" "}
                    <strong>arquitetura</strong> e{" "}
                    <strong>meio ambiente</strong> de forma singular. Após
                    deixarem os grandes centros urbanos, encontraram na Praia de
                    Pipa - RN o lugar perfeito para transformar sonhos em
                    projetos que harmonizam estética, natureza e
                    sustentabilidade.
                  </span>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <span>
                    Cada projeto carrega nossa <strong>essência</strong>:
                    espaços que vão além da arquitetura, oferecendo
                    exclusividade, equilíbrio e um novo conceito de viver.
                  </span>
                </FadeInOnScroll>
              </div>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="rigth">
              <img src={imageCasal} alt="Imagem dos fundadores" />
            </div>
          </FadeInOnScroll>
        </div>
        <div className="containerInfos">
          <FadeInOnScroll>
            <div className="card">
              <div className="titleCard">+12</div>
              <div className="subTitleCard">anos de experiência no mercado</div>
            </div>
          </FadeInOnScroll>
          {/* <FadeInOnScroll>
            <div className="line"></div>
          </FadeInOnScroll> */}
          <FadeInOnScroll>
            <div className="card">
              <img src={iconCasa} alt="" className="iconCard" />
              <div className="subTitleCard">
                Consultoria e execução integradas
              </div>
            </div>
          </FadeInOnScroll>
          {/* <FadeInOnScroll>
            <div className="line"></div>
          </FadeInOnScroll> */}
          <FadeInOnScroll>
            <div className="card">
              <img src={iconBrasil} alt="" className="iconCard" />
              <div className="subTitleCard">
                Projetos realizados em todo o Brasil
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="arcBioChoiceContainer">
        <div className="header">
          <FadeInOnScroll>
            <div className="subTitle">Por que</div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="title">escolher a ArcBio?</div>
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll>
          <div className="content">
            <img
              src={casa}
              alt="imagem de casa de praia rustica"
              className="imageCasa"
            />
            <div className="containerCard">
              <FadeInOnScroll>
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
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div className="card">
                  <img src={iconFolha} alt="icone folha" />
                  <div className="containerText">
                    <div className="title">Design Rústico e Elegante</div>
                    <div className="subTitle">
                      Combinação de materiais nobres e soluções inteligentes.
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div className="card">
                  <img src={iconFolha} alt="icone folha" />
                  <div className="containerText">
                    <div className="title">Parceria Completa</div>
                    <div className="subTitle">
                      Acompanhamento em todas as etapas, da aquisição do imóvel
                      à construção e rentabilização.
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <button className="buttonCard" onClick={() =>
      window.open(
        "https://api.whatsapp.com/send/?phone=558432464285&text=Ol%C3%A1%2C+ArcBio%21+Quero+saber+mais+sobre+seus+projetos+exclusivos+e+servi%C3%A7os.+Poderiam+me+ajudar%3F&type=phone_number&app_absent=0",
        "_blank"
      )
    }>Solicitar Reunião</button>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Sobre;
