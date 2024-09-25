import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import IngeneriasMecanicaData from "../data/IngeneriasMecanicaData";

export default function IngeneriaMecanica() {
  return (
    <>
      <SectionV5
        titulo={IngeneriasMecanicaData.introduccion.titulo}
        contenido={IngeneriasMecanicaData.introduccion.contenido}
      /> 

      <SectionV3 
        title={IngeneriasMecanicaData.sectionV3.title} 
        datos={IngeneriasMecanicaData.sectionV3.datos} 
      />

      <Portafolio 
        title={IngeneriasMecanicaData.portafolio.title}
        description={IngeneriasMecanicaData.portafolio.description}
        pdfUrl={IngeneriasMecanicaData.portafolio.pdfUrl}
      />
    </>
  );
}
