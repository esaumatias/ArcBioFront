import React, { useState } from "react";
import FadeInOnScroll from "../../Components/FadeInOnScroll";
import { photosData } from "../../Data/Photos";

import "./Portifolio.css";

const Portifolio = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Estado para a imagem selecionada

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="containerPortifolio" id="Portfólio">
      <div className="header">
        <FadeInOnScroll>
          <div className="subTitle">Projetos que transformam</div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="title">espaços em destinos únicos</div>
        </FadeInOnScroll>
      </div>

      <div className="photos">
        <div className="containerPhotos">
          <div className="card"></div>
          {photosData?.map((item, idx) => (
            <div className="cardImage">
              <FadeInOnScroll>
                <img
                  src={item.image}
                  alt="casa de alto padrão"
                  className="image1"
                  key={idx}
                  onClick={() => openModal(item.image)} // Adiciona evento de clique
                />
              </FadeInOnScroll>
            </div>
          ))}

          <div className="card2"></div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="modal-image"
            />
            <button className="close-button" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portifolio;
