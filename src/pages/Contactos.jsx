import React from 'react';
import styles from '../styles/ContactModule.module.css';
import ContactosData from '../data/ContactosData';

export default function Contactos() {
  const { contactData, socialLinks, imgaenUbicacion, googleFormLinks } = ContactosData;


  return (
    <>
      <div className={styles.contactModule}>
        <div className={styles.contactInfo}>
          <div className={styles.contenedorDatos}>
            <h3>Datos de Contacto</h3>
            <ul>
              {contactData.map((data, index) => (
                <li key={index}>
                  <div className={styles.contenedorTituloDatos}>
                    <img src={data.icon} alt="" width={25} height={25} />
                    <strong>{data.title}:</strong>
                  </div>
                  <ul>
                    {data.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mapContainer}>
            <img src={imgaenUbicacion} alt="Map" style={{ width: '100%', height: '300px' }} />
          </div>
        </div>

        <div className={styles.socialMedia}>
          <h3>Síguenos en Redes Sociales</h3>
          <div className={styles.socialIcons}>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noreferrer">
                <img src={link.icon} alt="" width={40} height={40} />
              </a>
            ))}
          </div>
        </div>

        {/* Sección para los enlaces a formularios de Google */}
        <div className={styles.googleForms}>
          <h3>Formularios</h3>
          <ul className={styles.contenedorUlForm}>
            {googleFormLinks.map((form, index) => (
              <li key={index}>
                <a href={form.url} target="_blank" rel="noreferrer" className={styles.formLink}>
                  {form.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}