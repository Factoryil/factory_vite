import React from 'react';
import styles from './ServiciosGenerales.module.css';
import { Link } from 'react-router-dom'; 

const ServiciosGenerales = ({ datos }) => {
  const { titulo, servicios } = datos;

  return (
    <div className={styles.contenedorSectionServicios}>
      <div className={styles.contenedorTituloSectionV1}>
        <span>{titulo}</span>
      </div>
      <div className={styles.contenedorServicios}>
        {servicios.map((servicio) => (
          <div key={servicio.id} className={styles.servicioItem}>
            <Link  to={servicio.link} className={styles.servicioLink}>
              <img
                src={servicio.imgSrc}
                alt={servicio.title}
                width={80}
                height={80}
                className={styles.servicioImage} // Puedes agregar esta clase para estilos
              />
              <span>{servicio.title}</span>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosGenerales;
