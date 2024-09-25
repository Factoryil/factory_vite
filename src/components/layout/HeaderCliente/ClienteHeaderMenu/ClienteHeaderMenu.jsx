import React, { useState, useEffect } from 'react';
import ClienteHeaderMenuIcon from './ClienteHeaderMenuIcon/ClienteHeaderMenuIcon';
import ClienteHeaderNavMenu from './ClienteHeaderNavMenu/ClienteHeaderNavMenu';
import './ClienteHeaderMenu.css';

const ClienteHeaderMenu = ({ isOpenMenu, handleMenuToggle, closeMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState({
    main: null,
    sub: null
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1148) {
        closeMenu();
        setActiveDropdown({ main: null, sub: null });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [closeMenu]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpenMenu);
  }, [isOpenMenu]);

  const handleMainDropdownToggle = (label) => {
    setActiveDropdown(prev => ({
      ...prev,
      main: prev.main === label ? null : label,
      sub: prev.main === label ? null : prev.sub
    }));
  };

  const handleSubDropdownToggle = (label) => {
    setActiveDropdown(prev => ({
      ...prev,
      sub: prev.sub === label ? null : label
    }));
  };

  const handleLinkClick = () => {
    closeMenu(); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <>
      <ClienteHeaderMenuIcon isOpenMenu={isOpenMenu} setIsOpenMenu={handleMenuToggle} />
      <ClienteHeaderNavMenu 
        isOpenMenu={isOpenMenu} 
        activeDropdown={activeDropdown}
        onMainDropdownToggle={handleMainDropdownToggle}
        onSubDropdownToggle={handleSubDropdownToggle}
        onLinkClick={handleLinkClick} // Pasa la función para cerrar el menú
      />
    </>
  );
};

export default ClienteHeaderMenu;
