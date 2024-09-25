import React, { useState } from 'react';
import CertificadoCard from '../components/unique/CertificadoCard/CertificadoCard';
import { certificados } from '../data/certificadosData';
import '../styles/CertificadosPage.css';

export default function Certificados() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(certificados[index].img);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % certificados.length;
    setSelectedImage(certificados[newIndex].img);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + certificados.length) % certificados.length;
    setSelectedImage(certificados[newIndex].img);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container">
      <h1 className="titulo">CERTIFICADOS</h1>
      <div className="grid">
        {certificados.map((certificado, index) => (
          <CertificadoCard
            key={index}
            certificado={certificado.img}
            title={certificado.title}
            text={certificado.text}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={selectedImage} alt="Certificado Ampliado" />
          <button className="prev" onClick={prevImage}>&#10094;</button>
          <button className="next" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
