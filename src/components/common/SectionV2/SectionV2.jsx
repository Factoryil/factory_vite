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
          <p>Factory se ha convertido en el aliado que llevaba esperando mucho tiempo. Porque reúne lo que se necesita en el desarrollo de proyectos de ingeniería: profesionalismo, cumplimiento, responsabilidad y calidad en el proceso.</p>

          <div className={styles.contenedorde}>
           <h4 className={styles.bdevsSlickTitle}>Julián Salazar Valencia</h4>
            <h5 className={styles.bdevsSlickSubtitle}>CEO, LAAO.COM</h5>
          </div>

          <div className={styles.contenedordedostitu}>

          <div className={styles.contenedorde}>
              <h4 className={styles.bdevsSlickTitle}>Alejandro Salazar Quintero</h4>
              <h5 className={styles.bdevsSlickSubtitle}>DESARROLLADOR</h5>
            </div>

            <div className={styles.contenedorde}>
              <h4 className={styles.bdevsSlickTitle}>Javier Gonzalez Nuñez</h4>
              <h5 className={styles.bdevsSlickSubtitle}>DESARROLLADOR</h5>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default SectionV2;
