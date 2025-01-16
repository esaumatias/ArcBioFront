import React from "react";
import logo from "../../Assets/Logo sem contorno com legenda2@4x.png";
import iconWHats from "../../Assets/whatsapp-svgrepo-com (2).svg";
import iconInsta from "../../Assets/insta-svgrepo-com.svg";

import "./Footer.css";
import FadeInOnScroll from "../../Components/FadeInOnScroll";

const Footer = () => {
  return (
    <>
      <FadeInOnScroll>
        <footer className="containerFooter mobile">
          <img src={logo} alt="logo da ArcBio" />
          <div className="endereco">
            <div className="principal">Escritório Tibau do Sul-RN</div>
            <div className="secundario">
              Av. Três Poderes, 210 - Centro, Tibau do Sul - RN, 59178-000.
            </div>
          </div>
          <div className="line" />
          <div className="endereco">
            <div className="containerSocial">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div className="containerSOcial">
                  <img src={iconInsta} alt="" style={{ width: "20px" }} />
                </div>
                @arcbio.rn
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div className="containerSOcial">
                  <img src={iconWHats} alt="" style={{ width: "18px" }} />
                </div>
                (84) 3246-4285
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="direitos">
            © 2025 ArcBio Arquitetura & Consultoria Ambiental. Todos os direitos
            reservados.
          </div>
        </footer>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <footer className="containerFooter web">
          <img src={logo} alt="logo da ArcBio" />
          <div className="direitos">
            © 2025 ArcBio Arquitetura & Consultoria Ambiental. Todos os direitos
            reservados.
          </div>
          <div className="line" />
          <div className="endereco">
            <div className="principal">Escritório Tibau do Sul-RN</div>
            <div className="secundario">
              Av. Três Poderes, 210 - Centro, Tibau do Sul - RN, 59178-000.
            </div>
            <div className="containerSocial">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div className="containerSOcial">
                  <img src={iconInsta} alt="" style={{ width: "20px" }} />
                </div>
                @arcbio.rn
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div className="containerSOcial">
                  <img src={iconWHats} alt="" style={{ width: "18px" }} />
                </div>
                (84) 3246-4285
              </div>
            </div>
          </div>
        </footer>
      </FadeInOnScroll>
    </>
  );
};

export default Footer;
