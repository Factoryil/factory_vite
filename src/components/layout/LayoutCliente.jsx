import React from 'react';
import HeaderCliente from './HeaderCliente/HeaderCliente';
import FooterCliente from './FooterCliente/FooterCliente';
import './LayoutClienteglobal.css';
import styles from './LayoutCliente.module.css';

const LayoutCliente = ({ children }) => (
  <div className={styles.LayoutClienteContenedor}>
    <HeaderCliente className={styles.LayoutClienteHeader} />
    <main className={styles.LayoutClienteMain}>{children}</main>
    <FooterCliente className={styles.LayoutClienteFooter} />
  </div>
);

export default LayoutCliente;
