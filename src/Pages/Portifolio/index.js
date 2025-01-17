import React from "react";
import FadeInOnScroll from "../../Components/FadeInOnScroll";
import { photosData } from "../../Data/Photos";

import "./Portifolio.css";

const Portifolio = () => {
  return (
    <section className="containerPortifolio" id="Portfólio">
      <FadeInOnScroll>
        <div className="header">
          <div className="subTitle">Projetos que transformam</div>
          <div className="title">espaços em destinos únicos</div>
        </div>

        <div className="photos">
          <div className="containerPhotos">
            <div className="card"></div>
            {photosData?.map((item, idx) => (
              <img
                src={item.image}
                alt="casa de alto padrão"
                className="image1"
                key={idx}
              />
            ))}
            <div className="card2"></div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Portifolio;
