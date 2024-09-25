import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import LogisticaData from "../data/LogisticaData";

export default function Logistica() {
    return (
      <>
        <SectionV5
          titulo={LogisticaData.introduccion.titulo}
          contenido={LogisticaData.introduccion.contenido}
        /> 
  
        <SectionV3 
          title={LogisticaData.sectionV3.title} 
          datos={LogisticaData.sectionV3.datos} 
        />
  
        <Portafolio 
          title={LogisticaData.portafolio.title}
          description={LogisticaData.portafolio.description}
          pdfUrl={LogisticaData.portafolio.pdfUrl}
        />
      </>
    );
  }