import React from 'react';
import styles from './SectionV2.module.css'; 
import fondoSectionV2 from '../../../assets/images/fondos/b3.png'; // Asegúrate de que esta ruta sea correcta

const SectionV2 = ({ titulo, subtitulo, contenido }) => {
  return (
    <div className={styles.contenedorTestimonioFactory}>
      <div className={styles.itemTestimonioFactory}>
        <img 
          src={fondoSectionV2}
          alt="Testimonio" 
          className={styles.itemTestimonioFactoryImg}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div className={styles.itemTestimonioFactoryContenido}>
          <p>{contenido}</p>

          <div className={styles.contenedorde}>
           <h4 className={styles.bdevsSlickTitle}>{titulo}</h4>
            <h5 className={styles.bdevsSlickSubtitle}>{subtitulo}</h5>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default SectionV2;
