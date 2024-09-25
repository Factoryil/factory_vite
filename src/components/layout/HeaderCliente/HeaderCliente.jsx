import React, { useState } from 'react';
import ClienteHeaderLogo from './ClienteHeaderLogo/ClienteHeaderLogo'; 
import ClienteHeaderMenu from './ClienteHeaderMenu/ClienteHeaderMenu'; 
import styles from './HeaderCliente.module.css';

const HeaderCliente = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setIsOpenMenu(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <header className={styles.header}>
      <ClienteHeaderLogo closeMenu={closeMenu} />
      <ClienteHeaderMenu isOpenMenu={isOpenMenu} handleMenuToggle={handleMenuToggle} closeMenu={closeMenu} />
    </header>
  );
};

export default HeaderCliente;
