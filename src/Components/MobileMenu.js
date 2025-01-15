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
          <a href="#section1">Serviços</a>
          <a href="#section2">Portfólio</a>
          <a href="#section3">Entre em contato</a>
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
