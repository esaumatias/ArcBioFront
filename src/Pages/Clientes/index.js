import React from "react";
import imageCasal from "../../Assets/fundadores-arcbio-fabio-inaimo-cristina-lapas-02.png";

import "./Clientes.css";
import FadeInOnScroll from "../../Components/FadeInOnScroll";

const depoiments = [
  {
    text: "Gostaria muito de agradecer a toda equipe da ArcBio Arquitetura e em especial a Fábio e Cristina, que demonstraram competência, talento e dedicação. Juntos, transformamos nossos objetivos e desejos em um projeto arquitetônico que incorpora um estilo moderno, de muita beleza e funcionalidade. Parabéns ArcBio.",
    name: "JOSÉ CARLOS S. REIS",
    local: "Pousada Ondas de Pipa",
  },
  {
    text: "A ArcBio composta por dois excelentes profissionais atende a nossa empresa há 10 anos, a relação de confiança é clara e evidente pelo longo relacionamento. Mas o que fez este relacionamento profissional alongar-se tanto foi a capacidade técnica, profissionalismo, discrição e confiabilidade apresentada por seus representantes. ArcBio recomendo e avalio. Parabéns ArcBio.",
    name: "WANDERSON BORGES",
    local: "Pousada Xamã",
  },
  {
    text: "No primeiro contato constatei que eles seriam as pessoas que me representariam a 3 mil km de distância, e tive a certeza que escolhi os profissionais certos após me apresentarem o layout, tanto na beleza quanto no aproveitamento do terreno e a adição de sustentabilidade, acessibilidade e segurança, sempre obedecendo as normas vigentes, isso é um fator que prezo. Parabéns ArcBio.",
    name: "CESAR TERNI",
    local: "São Paulo",
  },
];

const Clientes = () => {
  return (
    <section className="containerClientes">
      <div className="header">
        <FadeInOnScroll>
          <div className="subTitle">O que nossos</div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="title">clientes dizem</div>
        </FadeInOnScroll>
      </div>

      <div className="containerCards">
        {depoiments.map((item, idx) => (
          <div className="card" key={idx}>
            <FadeInOnScroll>
              <div className="text">{item.text}</div>
              <div className="name">{item.name}</div>
              <div className="local">{item.local}</div>
            </FadeInOnScroll>
          </div>
        ))}
      </div>

      <div className="containerFundadores">
        <FadeInOnScroll>
          <div className="left">
            <FadeInOnScroll>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="subTitle">Vamos criar algo</div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="title">memorável juntos?</div>
            </FadeInOnScroll>
            <img src={imageCasal} alt="Imagem dos fundadores" />
            <div className="containerText">
              <FadeInOnScroll>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>
                    <strong>Dê o próximo passo</strong> para transformar seu
                    empreendimento ou residência.{" "}
                    <strong>Entre em contato com nossa equipe</strong> e
                    descubra como podemos criar um espaço único para você.
                  </span>
                </div>
              </FadeInOnScroll>
            </div>
            <FadeInOnScroll>
              <button
                className="buttonCard"
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
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="rigth">
            <img src={imageCasal} alt="Imagem dos fundadores" />
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Clientes;
