import projectManagementImg from '../assets/images/servicios/project-management_2308201.png';
import energySystemImg from '../assets/images/servicios/energy-system_12539733.png';
import settingImg from '../assets/images/servicios/setting_10370130.png';
import systemConfigurationImg from '../assets/images/servicios/system-configuration_11778376.png';
import environmentImg from '../assets/images/servicios/environment_708499.png';
import repairImg from '../assets/images/servicios/repair_3627906.png';
import engineeringImg from '../assets/images/servicios/engineering_2861721.png';

const IngeneriasData = {
  acercaDeNosotros: {
    titulo: "Acerca de nosotros",
    subtitulo: "Ingeniería y Soluciones Tecnológicas",
    contenido: "La ingeniería es la clave para transformar ideas en soluciones reales y efectivas. En nuestra compañía, abarcamos múltiples disciplinas de la ingeniería, combinando innovación y tecnología de vanguardia para optimizar procesos y automatizar operaciones. Nos especializamos en sectores como la construcción, la logística, el transporte y la manufactura, desarrollando soluciones técnicas que garantizan sostenibilidad y eficiencia. Nuestro enfoque está siempre orientado a superar los desafíos actuales y futuros del mercado global, proporcionando soluciones precisas y adaptadas a cada necesidad."
  },
  servicios: {
    titulo: "Nuestros servicios de ingeniería",
    servicios: [
      { id: 3, title: 'ingenieria civil', imgSrc: projectManagementImg, link: '/ingenerias/civil' },
      { id: 4, title: 'ingenieria electronica', imgSrc: energySystemImg, link: '/ingenerias/electronica' },
      { id: 5, title: 'ingenieria electrica', imgSrc: settingImg, link: '/ingenerias/electrica' },
      { id: 6, title: 'ingenieria de sistema', imgSrc: systemConfigurationImg, link: '/ingenerias/sistema' },
      { id: 7, title: 'ingenieria ambiental', imgSrc: environmentImg, link: '/ingenerias/ambiental' },
      { id: 8, title: 'ingenieria mecanica', imgSrc: repairImg, link: '/ingenerias/mecanica' },
      { id: 9, title: 'ingenieria industrial', imgSrc: engineeringImg, link: '/ingenerias/industrial' },
    ]
  },
  portafolio: {
    title: "Portafolio",
    description: "Explora nuestro portafolio de Ingenierías",
    pdfUrl: 'https://drive.google.com/file/d/11-Zh4gAGGUTi8tmiwF-8e0P_9tpD_AEg/view?usp=sharing'
  },
};

export default IngeneriasData;
