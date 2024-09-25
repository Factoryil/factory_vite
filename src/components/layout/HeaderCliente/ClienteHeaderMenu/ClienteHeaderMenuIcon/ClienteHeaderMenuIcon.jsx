import React from 'react';
import menuIMG from '../../../../../assets/header/menu-header.svg'; // o bien puedes usar una ruta relativa desde public
import styles from './ClienteHeaderMenuIcon.module.css';


const ClienteHeaderMenuIcon = ({ setIsOpenMenu }) => {
  return (
    <button
      className={styles.headerMenuIconButton}
      aria-label="Toggle Menu"
      onClick={() => setIsOpenMenu(prev => !prev)}
    >
      <img src={menuIMG} alt="Menú" className={styles.img} />
    </button>
  );
}

export default ClienteHeaderMenuIcon;
