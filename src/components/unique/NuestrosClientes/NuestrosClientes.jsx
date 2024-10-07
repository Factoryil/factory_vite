import React from 'react';
import Titulo from '../../base/Titulo/Titulo'; 
import styles from './NuestrosClientes.module.css'; 
import logoAeco from '../../../assets/images/nuestrosClientes/AENCO.webp';
import logoArtika from '../../../assets/images/nuestrosClientes/artika.png';
import logoCabanSystem from '../../../assets/images/nuestrosClientes/cabanSystem.jpg';
import logoEicon from '../../../assets/images/nuestrosClientes/eicon.png';
import logoElecnor from '../../../assets/images/nuestrosClientes/ELECNOR.png';
import logoSoltec from '../../../assets/images/nuestrosClientes/SOLTEC.png';
import logoVentus from '../../../assets/images/nuestrosClientes/VENTUS.jpg';
import logoINMEL from '../../../assets/images/nuestrosClientes/INMEL.png';
import logoAQUALIA from '../../../assets/images/nuestrosClientes/AQUALIA.png';
import logoCINCO from '../../../assets/images/nuestrosClientes/cinco.png';

const NuestrosClientes = () => {
  return (
    <div className={styles.contenedorSectionNuestrosClientes}>
      <Titulo>nuestros clientes</Titulo>
      <div className={styles.contenedorLogosClientes}>
        <img src={logoAeco} alt="AENCO" className={styles.logosClientes} />
        <img src={logoArtika} alt="Artika" className={styles.logosClientes} />
        <img src={logoCabanSystem} alt="CabanSystem" className={styles.logosClientes} />
        <img src={logoEicon} alt="Eicon" className={styles.logosClientes} />
        <img src={logoElecnor} alt="ELECNOR" className={styles.logosClientes} />
        <img src={logoSoltec} alt="SOLTEC" className={styles.logosClientes} />
        <img src={logoVentus} alt="VENTUS" className={styles.logosClientes} />
        <img src={logoINMEL} alt="INMEL" className={styles.logosClientes} />
        <img src={logoAQUALIA} alt="AQUALIA" className={styles.logosClientes} />
        <img src={logoCINCO} alt="CINCO" className={styles.logosClientes} />
       
      </div>
    </div>
  );
};

export default NuestrosClientes;

