
import inventoryImg from '../assets/images/servicios/inventory_2216463.png';
import projectManagementImg from '../assets/images/servicios/project-management_2308201.png';
import energySystemImg from '../assets/images/servicios/energy-system_12539733.png';
import settingImg from '../assets/images/servicios/setting_10370130.png';
import systemConfigurationImg from '../assets/images/servicios/system-configuration_11778376.png';
import environmentImg from '../assets/images/servicios/environment_708499.png';
import repairImg from '../assets/images/servicios/repair_3627906.png';
import engineeringImg from '../assets/images/servicios/engineering_2861721.png';
import deliveryTruckImg from '../assets/images/servicios/delivery-truck_516419.png';
import favouriteImg from '../assets/images/servicios/favourite_2156164.png';
import tankTruckImg from '../assets/images/servicios/tank-truck_1850928.png';
import bgnum1 from '../assets/images/carrusel/inicio/hero-06.jpg';
import bgnum2 from '../assets/images/carrusel/inicio/slider-1.jpg';
import bgnum3 from '../assets/images/carrusel/inicio/carro.jpeg';

const InicioData = {
  acercaDeNosotros: {
    titulo: "Acerca de nosotros",
    subtitulo: "FACTORY INTEGRATED LOGISTICS SAS",
    contenido: "Somos una fábrica de ingeniería, logística y comercio online; Nuestro enfoque innovador y vanguardista, respaldado por una amplia experiencia en el mercado, desarrollando software para liderar, integrar y automatizar todos los procesos operativos, ofreciendo control total y eficacia en la ejecución de obras, así como servicios de transporte especial de pasajeros, transporte de carga, alquiler de vehículos y maquinaria amarilla, 'cumpliendo las normas del Ministerio de Transporte de Colombia', y la comercialización de bienes y servicios online."
  },
  portafolio: {
    title: "portafolio",
    description: "Explora nuestro portafolio general",
    pdfUrl: 'https://drive.google.com/file/d/11-Zh4gAGGUTi8tmiwF-8e0P_9tpD_AEg/view?usp=sharing'
  },
  testimonio: {
    titulo: "Julián Salazar Valencia",
    subtitulo: "CEO, LAAO.COM",
    contenido: "Factory se ha convertido en el aliado que llevaba esperando mucho tiempo. Porque reúne lo que se necesita en el desarrollo de proyectos de ingeniería: profesionalismo, cumplimiento, responsabilidad y calidad en el proceso."
  },
  servicios: {
    titulo: "nuestros servicios",
    servicios: [
      { id: 1, title: 'logistica', imgSrc: inventoryImg, link: '/logistica' },
      { id: 3, title: 'ingenieria civil', imgSrc: projectManagementImg, link: '/ingenerias/civil' },
      { id: 4, title: 'ingenieria electronica', imgSrc: energySystemImg, link: '/ingenerias/electronica' },
      { id: 5, title: 'ingenieria electrica', imgSrc: settingImg, link: '/ingenerias/electrica' },
      { id: 6, title: 'ingenieria de sistema', imgSrc: systemConfigurationImg, link: '/ingenerias/sistema' },
      { id: 7, title: 'ingenieria ambiental', imgSrc: environmentImg, link: '/ingenerias/ambiental' },
      { id: 8, title: 'ingenieria mecanica', imgSrc: repairImg, link: '/ingenerias/mecanica' },
      { id: 9, title: 'ingenieria industrial', imgSrc: engineeringImg, link: '/ingenerias/industrial' },
      { id: 10, title: 'transporte carga', imgSrc: deliveryTruckImg, link: '/transportes/carga' },
      { id: 11, title: 'transporte especial', imgSrc: favouriteImg, link: '/transportes/especial' },
      { id: 12, title: 'transporte hidrocarburos', imgSrc: tankTruckImg, link: '/transportes/hidrocarburos' },
    ]
  },
  slidesData: [
    {
      backgroundImage: bgnum1,
      title: 'SOMOS FACTORY',
      subtitle: 'INTEGRATED LOGISTICS',
      text: 'INGENIERÍA CIVIL, ELECTRÓNICA, ELÉCTRICA, SISTEMAS, MECÁNICA, AMBIENTAL E INDUSTRIAL. LOGÍSTICA “TRANSPORTE ESPECIAL DE PASAJEROS, TRANSPORTE TERRESTRE DE CARGA: SECA, LÍQUIDOS, SÓLIDOS, CONDENSADAS Y PRODUCTOS DERIVADOS DEL PETRÓLEO”, ALQUILER DE VEHÍCULOS Y MAQUINARIA PESADA, COMERCIALIZADOR DE BIENES Y SERVICIOS ONLINE.',
      links: [
        { to: '/contactos', text: 'CONTÁCTANOS', className: 'color-naranja' }
      ]
    },
    {
      backgroundImage: bgnum2,
      title: 'Visión Innovadora',
      subtitle: 'VANGUARDISTA DEL MERCADO',
      text: 'PRESTANDO SOLUCIONES INTEGRALES QUE POTENCIAN LA ECONOMÍA DE SU EMPRESA, OFRECIENDO ESTRATEGIAS PERSONALIZADAS QUE SE ADAPTAN A SUS NECESIDADES ESPECÍFICAS. NUESTRA MISIÓN ES IMPULSAR SU CRECIMIENTO MEDIANTE INNOVACIONES CONSTANTES Y UNA ATENCIÓN EXCEPCIONAL AL CLIENTE.',
      links: [
        { to: '/quienes-somos', text: 'CONOCE MÁS', className: 'color-naranja' },
        { to: '/contactos', text: 'ESCRÍBENOS', className: 'color-azul' }
      ]
    },
    {
      backgroundImage: bgnum3,
      title: 'Alquiler de Autos',
      subtitle: 'MOVILIDAD A SU ALCANCE',
      text: 'En Factory Integrated Logistics SAS, ofrecemos un servicio de alquiler de vehículos adaptados a cualquier necesidad. Contamos con una flota diversa que garantiza calidad y comodidad, ideal para viajes de negocio o ocasionales. Descubra cómo nuestros vehículos pueden facilitar su movilidad.',
      links: [
        { to: '/transportes', text: 'CONOCE MÁS', className: 'color-naranja' },
        { to: '/contactos', text: 'CONTÁCTANOS', className: 'color-azul' }
      ]
    },
  ]
};

export default InicioData;
