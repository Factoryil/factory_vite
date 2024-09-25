import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import styles from './ClienteHeaderLogo.module.css';
import menuicon from '../../../../assets/header/logo-header.png'; 

const ClienteHeaderLogo = ({ closeMenu }) => {
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0); // Mueve el scroll al tope si ya está en la página de inicio
    }
    closeMenu(); // Cierra el menú si está abierto
  };

  return (
    <Link to="/" className={styles.contenedorLogoPagina} onClick={handleClick}>
      <img 
        src={menuicon}
        alt="Logo" 
        className={styles.img} 
      />
    </Link>
  );
};

export default ClienteHeaderLogo;
