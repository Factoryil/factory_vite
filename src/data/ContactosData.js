import IcoFacebook from '../assets/contactos/icons8-facebook-48.png'
import IcoTwitter from '../assets/contactos/icons8-twitterx-50.png'
import IcoInstagram from '../assets/contactos/icons8-instagram-48.png'
import IcoCorreo from '../assets/contactos/icons8-email-48.png'
import IcoTelefonos from '../assets/contactos/icons8-featurephone-48.png'
import IcoOficinas from '../assets/contactos/icons8-business-building-48.png'
import ImgUbicacion from '../assets/contactos/ubicacion.png'
import Icolinkedin from '../assets/contactos/linkedin.png'

const ContactosData = {
  imgaenUbicacion: ImgUbicacion,
  contactData: [
    {
      title: 'Correos Electrónicos',
      icon: IcoCorreo,
      details: ['proveedor@factoryil.com', 'gps@factoryil.com'],
    },
    {
      title: 'Teléfonos',
      icon: IcoTelefonos,
      details: ['+57 322 613 7916', '+57 311 2605606'],
    },
    {
      title: 'Oficinas',
      icon: IcoOficinas,
      details: [
        'Barranquilla, Colombia - CALLE 65B#42-45',
        'Barrancabermeja, Colombia - Calle 52A #34c-60',
      ],
    },
  ],
  socialLinks: [
    { url: 'https://facebook.com', icon: IcoFacebook },
    { url: 'https://twitter.com', icon: IcoTwitter },
    { url: 'https://instagram.com', icon: IcoInstagram },
    { url: 'https://www.linkedin.com', icon: Icolinkedin },
    
  ],
  googleFormLinks:[
    { title: "PROVEEDORES", url: "https://docs.google.com/forms/d/e/1FAIpQLSfwU__Xr1zjMeo0VtzLy8FByZNZq9YLyFWDS8FkHW52oO6TDQ/viewform?usp=sf_link" },
    { title: "REGISTRO DE VEHICULOS ", url: "https://docs.google.com/forms/d/e/1FAIpQLSfRiKBfVoaXI7oi3TLLHFh_f1aaGeYgySAkJu2QP_TNlM6CeQ/viewform?usp=sf_link" },
    { title: "Cotización de Servicios/Productos ", url: "https://docs.google.com/forms/d/e/1FAIpQLSde0vSHcF9fMubLZVavYYbQF50p5fcNGKw_B0jZ7TWiOHP-ZQ/viewform?usp=sf_link" },
  ]
};

export default ContactosData;
