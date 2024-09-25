import React from 'react';
import SectionV1 from '../components/common/SectionV1/SectionV1';
import LocalizacionSatelital from '../components/unique/LocalizacionSatelital/LocalizacionSatelital';
import Portafolio from '../components/common/Portafolio/Portafolio';
import NuestrosClientes from '../components/unique/NuestrosClientes/NuestrosClientes';
import SectionV2 from '../components/common/SectionV2/SectionV2';
import ServiciosGenerales from '../components/common/ServiciosGenerales/ServiciosGenerales';
import Carrusel from '../components/unique/carrusel/Carrusel';
import InicioData from '../data/InicioData';

const Inicio = () => {
  return (
    <>
      <Carrusel slidesData={InicioData.slidesData} />

      <SectionV1
        titulo={InicioData.acercaDeNosotros.titulo}
        subtitulo={InicioData.acercaDeNosotros.subtitulo}
        contenido={InicioData.acercaDeNosotros.contenido}
      />

      <ServiciosGenerales datos={InicioData.servicios} />

      <LocalizacionSatelital />
      
      <Portafolio 
        title={InicioData.portafolio.title}
        description={InicioData.portafolio.description}
        pdfUrl={InicioData.portafolio.pdfUrl}
      />
      
      <NuestrosClientes />
      
      <SectionV2
        titulo={InicioData.testimonio.titulo}
        subtitulo={InicioData.testimonio.subtitulo}
        contenido={InicioData.testimonio.contenido}
      />
    </>
  );
};

export default Inicio;
