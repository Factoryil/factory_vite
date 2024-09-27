import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para navegación interna
import styles from './Footer.module.css';

const FooterCliente = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <div className={styles.footerContainerItem}>
          <h2 className={styles.footerSectionTitle}>Nuestra Empresa</h2>
          <div className={styles.footerSectionContent}>
            <p className={styles.colorGray}>
              Somos una empresa de ingeniería integral, ejecutando proyectos que impulsan la economía de su empresa. Ingeniería Eléctrica, de Sistemas, Electrónica, Mecánica, Civil, entre otras.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.footerContainerItem}>
          <h2 className={styles.footerSectionTitle}>Ubicaciones</h2>
          <div className={styles.footerSectionContent}>
            <div>
              <strong>SEDE TECNOLÓGICA</strong><br />
              BARRANCABERMEJA<br />
              Calle 52A #34c-60<br /><br />
            </div>
            <div>
              <strong>SEDE LOGÍSTICA</strong><br />
              BARRANQUILLA-ATLÁNTICO<br />
              CALLE 65B#42-45<br /><br />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.footerContainerItem}>
          <h2 className={styles.footerSectionTitle}>Servicios</h2>
          <div className={styles.footerSectionContent}>
            <ul className={styles.footerLinks}>
              <li><Link to="/ingenerias">INGENIERÍAS</Link></li>
              <li><Link to="/logistica">LOGÍSTICA</Link></li>
              <li><Link to="/transportes">TRANSPORTES</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.footerContainerItem}>
          <h2 className={styles.footerSectionTitle}>Links útiles</h2>
          <div className={styles.footerSectionContent}>
            <ul className={styles.footerLinks}>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfwU__Xr1zjMeo0VtzLy8FByZNZq9YLyFWDS8FkHW52oO6TDQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" >REGISTRO DE PROVEEDORES</a></li> 
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfRiKBfVoaXI7oi3TLLHFh_f1aaGeYgySAkJu2QP_TNlM6CeQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" >REGISTRO DE VEHICULOS</a></li> 
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSde0vSHcF9fMubLZVavYYbQF50p5fcNGKw_B0jZ7TWiOHP-ZQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" >COTIZACIÓN DE SERVICIOS/PRODUCTOS</a></li> 

            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterCliente;
