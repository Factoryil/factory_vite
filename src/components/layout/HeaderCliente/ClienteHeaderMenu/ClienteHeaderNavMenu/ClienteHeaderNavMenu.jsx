import React, { useEffect, useState } from 'react';
import arrowIcon from '../../../../../assets/header/down-arrow.png';
import { Link, useLocation } from 'react-router-dom';
import './ClienteHeaderNavMenu.css';

const NavLink = ({ href, children, onLinkClick }) => {
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === href) {
      window.scrollTo(0, 0); // Mueve el scroll al tope si ya está en la misma ruta
    }
    onLinkClick(); // Ejecuta la lógica de navegación normal
  };

  return (
    <Link to={href} className="nav-menu-item" onClick={handleClick}>
      {children}
    </Link>
  );
};

const Dropdown = ({ toggleLabel, isOpen, onToggle, children }) => (
  <div className="dropdown">
    <button
      className="nav-menu-item dropdown-toggle"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      {toggleLabel}
      <img src={arrowIcon} alt="flecha" width={16} height={16} />
    </button>
    <div className={`dropdown-menu ${isOpen ? 'toggle' : ''}`}>
      {children}
    </div>
  </div>
);

const ClienteHeaderNavMenu = ({
  isOpenMenu,
  activeDropdown,
  onMainDropdownToggle,
  onSubDropdownToggle,
  onLinkClick
}) => {
  const location = useLocation();
  const [disableHover, setDisableHover] = useState(false);

  useEffect(() => {
    // Desactivar el hover brevemente cuando la ruta cambia
    setDisableHover(true);

    // Volver a habilitar el hover después de 500ms
    const timer = setTimeout(() => {
      setDisableHover(false);
    }, 500);

    // Limpiar el timeout si el componente se desmonta
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleLinkClick = () => {
    // Cierra el menú y restablece los dropdowns activos
    onMainDropdownToggle(null);
    onSubDropdownToggle(null);
    onLinkClick();
  };

  return (
    <nav className={`nav-menu ${isOpenMenu ? 'toggle' : ''} ${disableHover ? 'disable-hover' : ''}`}>
      <NavLink href="/" onLinkClick={handleLinkClick}>INICIO</NavLink>

      <Dropdown 
        toggleLabel="QUIENES SOMOS" 
        isOpen={activeDropdown.main === "quienes somos"}
        onToggle={() => onMainDropdownToggle("quienes somos")}
      >
        <NavLink href="/quienes-somos" onLinkClick={handleLinkClick}>QUIENES SOMOS</NavLink>
        <NavLink href="/certificados" onLinkClick={handleLinkClick}>CERTIFICADOS</NavLink>
      </Dropdown>

      <Dropdown 
        toggleLabel="INGENERIAS" 
        isOpen={activeDropdown.main === "ingenierias"}
        onToggle={() => onMainDropdownToggle("ingenierias")}
      >
        <NavLink href="/ingenerias" onLinkClick={handleLinkClick}>INGENERIAS</NavLink>
        {["CIVIL", "ELECTRONICA", "ELECTRICA", "SISTEMA", "AMBIENTAL", "MECANICA", "INDUSTRIAL"].map((tipo) => (
          <NavLink key={tipo} href={`/ingenerias/${tipo}`} onLinkClick={handleLinkClick}>
            ingenieria {tipo}
          </NavLink>
        ))}
      </Dropdown>

      <Dropdown 
        toggleLabel="LOGISTICA" 
        isOpen={activeDropdown.main === "logistica"}
        onToggle={() => onMainDropdownToggle("logistica")}
      >
        <NavLink href="/logistica" onLinkClick={handleLinkClick}>LOGISTICA</NavLink>
        <Dropdown 
          toggleLabel="TRANSPORTES" 
          isOpen={activeDropdown.sub === "transportes"}
          onToggle={() => onSubDropdownToggle("transportes")}
        >
          {["", "carga", "especial", "hidrocarburos"].map((tipo) => (
            <NavLink key={tipo} href={`/transportes${tipo ? `/${tipo}` : ''}`} onLinkClick={handleLinkClick}>
              transportes {tipo || ''}
            </NavLink>
          ))}
        </Dropdown>
      </Dropdown>

      <NavLink href="/contactos" onLinkClick={handleLinkClick}>CONTACTOS</NavLink>
    </nav>
  );
};

export default ClienteHeaderNavMenu;
