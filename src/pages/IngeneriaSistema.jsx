import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import IngeneriasSistemaData from "../data/IngeneriasSistemaData";

export default function IngeneriaSistema() {
  return (
    <>
      <SectionV5
        titulo={IngeneriasSistemaData.introduccion.titulo}
        contenido={IngeneriasSistemaData.introduccion.contenido}
      /> 

      <SectionV3 
        title={IngeneriasSistemaData.sectionV3.title} 
        datos={IngeneriasSistemaData.sectionV3.datos} 
      />

      <Portafolio 
        title={IngeneriasSistemaData.portafolio.title}
        description={IngeneriasSistemaData.portafolio.description}
        pdfUrl={IngeneriasSistemaData.portafolio.pdfUrl}
      />
    </>
  );
}
