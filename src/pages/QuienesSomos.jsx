import React from 'react';
import SectionV1 from '../components/common/SectionV1/SectionV1';
import SectionV4 from '../components/common/SectionV4/SectionV4';
import Portafolio from '../components/common/Portafolio/Portafolio';
import NuestrosClientes from '../components/unique/NuestrosClientes/NuestrosClientes';
import QuienesSomosData from '../data/QuienesSomosData';

export default function QuienesSomos() {
  return (
    <>
      <SectionV1
        titulo={QuienesSomosData.acercaDeNosotros.titulo}
        subtitulo={QuienesSomosData.acercaDeNosotros.subtitulo}
        contenido={QuienesSomosData.acercaDeNosotros.contenido}
      />
      <SectionV4 
          title={QuienesSomosData.titleSections}
          sections={QuienesSomosData.sections}
      />
      <NuestrosClientes />

      <Portafolio 
        title={QuienesSomosData.portafolio.title}
        description={QuienesSomosData.portafolio.description}
        pdfUrl={QuienesSomosData.portafolio.pdfUrl}
      />
    </>
  );
}
