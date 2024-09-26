import React from 'react';
import styles from '../styles/NotFound.module.css'; // Importa el archivo CSS Module
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver a la página de inicio</Link>
    </div>
  );
}

export default NotFound;
