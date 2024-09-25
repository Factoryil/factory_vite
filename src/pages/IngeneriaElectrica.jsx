import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import IngeneriasElectricaData from "../data/IngeneriasElectricaData";

export default function IngeneriaElectrica() {
  return (
    <>
      <SectionV5
        titulo={IngeneriasElectricaData.introduccion.titulo}
        contenido={IngeneriasElectricaData.introduccion.contenido}
      /> 

      <SectionV3 
        title={IngeneriasElectricaData.sectionV3.title} 
        datos={IngeneriasElectricaData.sectionV3.datos} 
      />

      <Portafolio 
        title={IngeneriasElectricaData.portafolio.title}
        description={IngeneriasElectricaData.portafolio.description}
        pdfUrl={IngeneriasElectricaData.portafolio.pdfUrl}
      />
    </>
  );
}
