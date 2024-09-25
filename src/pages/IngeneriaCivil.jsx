import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import IngeneriasCivilData from "../data/IngeneriasCivilData";

export default function IngeneriaCivil() {
  return (
    <>
      <SectionV5
        titulo={IngeneriasCivilData.introduccion.titulo}
        contenido={IngeneriasCivilData.introduccion.contenido}
      /> 

      <SectionV3 
        title={IngeneriasCivilData.sectionV3.title} 
        datos={IngeneriasCivilData.sectionV3.datos} 
      />

      <Portafolio 
        title={IngeneriasCivilData.portafolio.title}
        description={IngeneriasCivilData.portafolio.description}
        pdfUrl={IngeneriasCivilData.portafolio.pdfUrl}
      />
    </>
  );
}
