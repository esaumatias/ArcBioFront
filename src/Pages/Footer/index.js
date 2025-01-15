import React from "react";
import logo from '../../Assets/Logo sem contorno com legenda2@4x.png';

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="containerFooter">
      <img src={logo} alt="logo da ArcBio" />
      <div className="direitos">
        © 2025 ArcBio Arquitetura & Consultoria Ambiental. Todos os direitos
        reservados.
      </div>
      <div className="endereco">
        <div className="principal">Escritório Tibau do Sul-RN</div>
        <div className="secundario">Av. Três Poderes, 210 - Centro, Tibau do Sul - RN, 59178-000.</div>
        <div className="containerSocial">
          <div>@arcbio.rn</div>
          <div>(84) 3246-4285</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
