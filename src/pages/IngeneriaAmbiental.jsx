import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import IngeneriasAmbientalData from "../data/IngeneriasAmbientalData";

export default function IngeneriaAmbiental() {
  return (
    <>
      <SectionV5
        titulo={IngeneriasAmbientalData.introduccion.titulo}
        contenido={IngeneriasAmbientalData.introduccion.contenido}
      /> 

      <SectionV3 
        title={IngeneriasAmbientalData.sectionV3.title} 
        datos={IngeneriasAmbientalData.sectionV3.datos} 
      />

      <Portafolio 
        title={IngeneriasAmbientalData.portafolio.title}
        description={IngeneriasAmbientalData.portafolio.description}
        pdfUrl={IngeneriasAmbientalData.portafolio.pdfUrl}
      />
    </>
  );
}
