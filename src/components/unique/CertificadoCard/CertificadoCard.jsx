import React from 'react';

const CertificadoCard = ({ certificado, title, text, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={certificado} alt={title} className="card-image" width={500} height={300} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default CertificadoCard;
