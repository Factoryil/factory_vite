import React from 'react';
import styles from './SectionV3.module.css'; 

const SectionV3 = ({ title, datos }) => {
  return (
    <div className={styles.contenedorSectionServicios}>
      <div className={styles.contenedorTituloSection}>
        <span>{title}</span>
      </div>
      <div className={styles.contenedorItemsServicios}>
        {datos.map((dato, index) => (
          <div key={index} className={styles.contenedorBloqueInfo}>
            <div>
              <span>{dato.title}</span>
              <p>{dato.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionV3;
