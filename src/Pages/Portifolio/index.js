import React from "react";
import FadeInOnScroll from "../../Components/FadeInOnScroll";
import image1 from "../../Assets/portifolio/casa-de-condominio-alto-padrao-arcbio-02.png";
import image2 from "../../Assets/portifolio/casa-de-condominio-alto-padrao-arcbio-01.png";
import image3 from "../../Assets/portifolio/chale-de-praia-rustico-03.jpg";
import image4 from "../../Assets/portifolio/chale-de-praia-rustico-04.jpg";
import image5 from "../../Assets/portifolio/chale-de-praia-rustico-02.jpg";
import image6 from "../../Assets/portifolio/residencia-rustica-alto-padrao-arcbio-01.jpg";
import image7 from "../../Assets/portifolio/residencia-rustica-alto-padrao-arcbio-02.jpg";
import image8 from "../../Assets/portifolio/residencia-rustica-alto-padrao-arcbio-03.jpg";
import image9 from "../../Assets/portifolio/residencia-rustica-alto-padrao-arcbio-04.jpg";
import image10 from "../../Assets/portifolio/resort-alto-padrao-design-rustico-arcbio-03.png";
import image11 from "../../Assets/portifolio/resort-alto-padrao-design-rustico-arcbio-01.png";
import image12 from "../../Assets/portifolio/resort-alto-padrao-design-rustico-arcbio-04.png";
import image13 from "../../Assets/portifolio/resort-alto-padrao-design-rustico-arcbio-02.png";
import image14 from "../../Assets/portifolio/casa-rustica-litoranea-arcbio-01.jpg";
import image15 from "../../Assets/portifolio/casa-rustica-litoranea-arcbio-02.jpg";
import image16 from "../../Assets/portifolio/casa-rustica-litoranea-arcbio-03.jpg";

import "./Portifolio.css";

const Portifolio = () => {
  return (
    <section className="containerPortifolio">
      <FadeInOnScroll>
        <div className="header">
          <div className="subTitle">Projetos que transformam</div>
          <div className="title">espaços em destinos únicos</div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="photos">
          <div className="containerPhotos">
            <div className="card"></div>
            <img src={image1} alt="casa de alto padrão" className="image1" />
            <img src={image2} alt="casa de alto padrão" className="image1" />
            <img src={image3} alt="casa de alto padrão" className="image1" />
            <img src={image4} alt="casa de alto padrão" className="image1" />
            <img src={image5} alt="casa de alto padrão" className="image1" />
            <img src={image6} alt="casa de alto padrão" className="image1" />
            <img src={image7} alt="casa de alto padrão" className="image1" />
            <img src={image8} alt="casa de alto padrão" className="image1" />
            <img src={image9} alt="casa de alto padrão" className="image1" />
            <img src={image10} alt="casa de alto padrão" className="image1" />
            <img src={image11} alt="casa de alto padrão" className="image1" />
            <img src={image12} alt="casa de alto padrão" className="image1" />
            <img src={image13} alt="casa de alto padrão" className="image1" />
            <img src={image14} alt="casa de alto padrão" className="image1" />
            <img src={image15} alt="casa de alto padrão" className="image1" />
            <img src={image16} alt="casa de alto padrão" className="image1" />
            <div className="card2"></div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Portifolio;
