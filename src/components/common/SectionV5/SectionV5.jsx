import React from 'react';
import styles from './SectionV5.module.css'; 
import fondoSectionV2 from '../../../assets/images/fondos/b3.png';

const SectionV5 = ({ titulo, contenido }) => {
  return (
    <div className={styles.contenedorTestimonioFactory}>
      <img 
        src={fondoSectionV2}
        alt="Testimonio" 
        className={styles.itemTestimonioFactoryImg}
      />
      <div className={styles.itemTestimonioFactoryContenido}>
        <h4>{titulo}</h4>
        <p>{contenido}</p>
      </div>
    </div>
  );
};

export default SectionV5;
