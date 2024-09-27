import React from 'react';
import styles from './LocalizacionSatelital.module.css'; 
import fondoImg from '../../../assets/images/fondos/b3.png'; 
import locationMap from '../../../assets/images/icon/gps-location-map.png';
import locationMapNavigation from '../../../assets/images/icon/gps-location-map-navigation.png';

const LocalizacionSatelital = () => {
  return (
    <div className={styles.contenedorLocalizacionSatelital}>
      {/* Fondo de la sección */}
      <img
        src={fondoImg}
        alt="Fondo con temática de ubicación satelital"
        className={styles.bgImage}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      
      {/* Contenido principal */}
      <div className={styles.contenidoLocalizacionSatelital}>
        <span className={styles.titulo}>LOCALIZACIÓN SATELITAL</span>
        <h3 className={styles.subtitulo}>Ubica tu vehículo de manera remota desde cualquier lugar</h3>
        
        {/* Bloque de seguridad remota */}
        <div className={styles.contenedorBloqueLocalizacion}>
          <img
            src={locationMap}
            alt="Icono de localización GPS"
            width={80}
            height={80}
          />
          <div>
            <span className={styles.bloqueTitulo}>Seguridad Remota</span>
            <p className={styles.bloqueDescripcion}>
              Monitorea cualquier tipo de vehículos y equipos industriales, de construcción o del sector petrolero con total seguridad.
            </p>
          </div>
        </div>
        
        {/* Bloque de control desde el celular */}
        <div className={styles.contenedorBloqueLocalizacion}>
          <img
            src={locationMapNavigation}
            alt="Icono de navegación GPS desde celular"
            width={80}
            height={80}
          />
          <div>
            <span className={styles.bloqueTitulo}>Control desde tu celular</span>
            <p className={styles.bloqueDescripcion}>
              Disfruta de protección las 24 horas, con funciones como sensor de velocidad, botón de emergencia S.O.S y un sistema de alerta por alejamiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalizacionSatelital;
