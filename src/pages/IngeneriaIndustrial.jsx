import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import IngeneriasIndustrialData from "../data/IngeneriasIndustrialData";

export default function IngeneriaIndustrial() {
  return (
    <>
      <SectionV5
        titulo={IngeneriasIndustrialData.introduccion.titulo}
        contenido={IngeneriasIndustrialData.introduccion.contenido}
      /> 

      <SectionV3 
        title={IngeneriasIndustrialData.sectionV3.title} 
        datos={IngeneriasIndustrialData.sectionV3.datos} 
      />

      <Portafolio 
        title={IngeneriasIndustrialData.portafolio.title}
        description={IngeneriasIndustrialData.portafolio.description}
        pdfUrl={IngeneriasIndustrialData.portafolio.pdfUrl}
      />
    </>
  );
}
