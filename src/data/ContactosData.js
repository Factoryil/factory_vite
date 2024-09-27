import IcoFacebook from '../assets/contactos/icons8-facebook-48.png'
import IcoTwitter from '../assets/contactos/icons8-twitterx-50.png'
import IcoInstagram from '../assets/contactos/icons8-instagram-48.png'
import IcoCorreo from '../assets/contactos/icons8-email-48.png'
import IcoTelefonos from '../assets/contactos/icons8-featurephone-48.png'
import IcoOficinas from '../assets/contactos/icons8-business-building-48.png'
import Icolinkedin from '../assets/contactos/linkedin.png'

const ContactosData = {
  googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.678061524931!2d-74.80304752597998!3d10.987654755264154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d6da225bdad%3A0x6d881fcd1fedadbd!2sCl.%2065b%20%2342-45%2C%20Nte.%20Centro%20Historico%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses-419!2sco!4v1727450981425!5m2!1ses-419!2sco",
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
  googleFormLinks: [
    { title: "PROVEEDORES", url: "https://docs.google.com/forms/d/e/1FAIpQLSfwU__Xr1zjMeo0VtzLy8FByZNZq9YLyFWDS8FkHW52oO6TDQ/viewform?usp=sf_link" },
    { title: "REGISTRO DE VEHICULOS", url: "https://docs.google.com/forms/d/e/1FAIpQLSfRiKBfVoaXI7oi3TLLHFh_f1aaGeYgySAkJu2QP_TNlM6CeQ/viewform?usp=sf_link" },
    { title: "Cotización de Servicios/Productos", url: "https://docs.google.com/forms/d/e/1FAIpQLSde0vSHcF9fMubLZVavYYbQF50p5fcNGKw_B0jZ7TWiOHP-ZQ/viewform?usp=sf_link" },
  ],
};

export default ContactosData;
