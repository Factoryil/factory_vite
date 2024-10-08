import deliveryTruckImg from '../assets/images/servicios/delivery-truck_516419.png';
import favouriteImg from '../assets/images/servicios/favourite_2156164.png';
import tankTruckImg from '../assets/images/servicios/tank-truck_1850928.png';


const TransportesData = {
  acercaDeNosotros: {
    titulo: "Acerca de nosotros",
    subtitulo: "Servicios de Alquiler de Vehículos",
    contenido: "En FACTORY INTEGRATED LOGISTICS SAS, ofrecemos servicios de alquiler de vehículos diseñados para satisfacer las necesidades de transporte de nuestros clientes. Contamos con una flota diversa y moderna, que incluye desde camionetas hasta vehículos pesados. Nuestro objetivo es proporcionar soluciones de transporte flexibles y eficientes, garantizando la calidad y seguridad en cada servicio."
  },
  servicios: {
    titulo: "Nuestros servicios de ingeniería",
    servicios: [
      { id: 10, title: 'transporte carga', imgSrc: deliveryTruckImg, link: '/transportes/carga' },
      { id: 11, title: 'transporte especial', imgSrc: favouriteImg, link: '/transportes/especial' },
      { id: 12, title: 'transporte hidrocarburos', imgSrc: tankTruckImg, link: '/transportes/hidrocarburos' },
    ]
  },
  portafolio: {
    title: "Portafolio",
    description: "Explora nuestro portafolio de alquiler de vehículos",
    pdfUrl: 'https://drive.google.com/file/d/11-Zh4gAGGUTi8tmiwF-8e0P_9tpD_AEg/view?usp=sharing'
  },
};

export default TransportesData;
