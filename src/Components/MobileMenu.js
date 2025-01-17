import { motion } from "framer-motion";
import { useState } from "react";

import "./Menu.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? (
          <div className="menuX">
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
        ) : (
          <>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </>
        )}
      </div>

      {isOpen && (
        <motion.div
          className="menu-dropdown"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <a href="#Serviços">Serviços</a>
          <a href="#Portfólio">Portfólio</a>
          <a
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=558432464285&text=Ol%C3%A1%2C+ArcBio%21+Quero+saber+mais+sobre+seus+projetos+exclusivos+e+servi%C3%A7os.+Poderiam+me+ajudar%3F&type=phone_number&app_absent=0",
                "_blank"
              )
            }
          >
            Entre em contato
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
