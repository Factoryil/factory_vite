import React from 'react';
import styles from './LocalizacionSatelital.module.css'; 
import fondoImg from '../../../assets/images/fondos/b3.png'; 
import locationMap from '../../../assets/images/icon/gps-location-map.png';
import locationMapNavigation from '../../../assets/images/icon/gps-location-map-navigation.png';

const LocalizacionSatelital = () => {
  return (
    <div className={styles.contenedorLocalizacionSatelital}>
      <img
        src={fondoImg}
        alt="Background"
        className={styles.bgImage}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Asegúrate de ajustar el tamaño según sea necesario
      />
      <div className={styles.contenidoLocalizacionSatelital}>
        <span>LOCALIZACIÓN SATELITAL</span>
        <h3>LOCALIZA TU VEHÍCULO DESDE LA COMODIDAD DE TU HOGAR</h3>
        <div className={styles.contenedorBloqueLocalizacion}>
          <img
            src={locationMap}
            alt="Icono 1"
            width={80}
            height={80}
          />
          <div>
            <span>Seguridad remota</span>
            <p>Para todo tipo de vehículos y equipos para el sector industrial, constructor y petrolero</p>
          </div>
        </div>
        <div className={styles.contenedorBloqueLocalizacion}>
          <img
            src={locationMapNavigation}
            alt="Icono 2"
            width={80}
            height={80}
          />
          <div>
            <span>Desde tu celular</span>
            <p>Protección activa las 24 horas, sensor de velocidad, botón S.O.S y sensor de alejamiento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalizacionSatelital;
