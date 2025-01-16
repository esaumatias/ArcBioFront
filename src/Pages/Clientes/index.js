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
      <FadeInOnScroll>
        <div className="header">
          <div className="subTitle">O que nossos</div>
          <div className="title">clientes dizem</div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="containerCards">
          {depoiments.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="text">{item.text}</div>
              <div className="name">{item.name}</div>
              <div className="local">{item.local}</div>
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      <div className="containerFundadores">
        <FadeInOnScroll>
          <div className="left">
            <div className="subTitle">Vamos criar algo</div>
            <div className="title">memorável juntos?</div>
            <div className="containerText">
              <span>
                <strong>Dê o próximo passo</strong> para transformar seu
                empreendimento ou residência.{" "}
                <strong>Entre em contato com nossa equipe</strong> e descubra
                como podemos criar um espaço único para você.
              </span>
            </div>
            <button className="buttonCard">Solicitar Reunião</button>
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
