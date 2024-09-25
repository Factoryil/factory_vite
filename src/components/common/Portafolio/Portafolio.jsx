import React from 'react';
import styles from './Portafolio.module.css'; 
import fondoPortafolio from '../../../assets/images/fondos/portafolio.jpg';

const Portafolio = ({ title, description, pdfUrl }) => {
  return (
    <div className={styles.fullWidthSection}>
      <div className={styles.image}>
        <img 
          src={fondoPortafolio} 
          alt="Portafolio" 
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
        />
      </div>
      <div className={styles.content}>
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
          VER PDF
        </a>
      </div>
    </div>
  );
};

export default Portafolio;
