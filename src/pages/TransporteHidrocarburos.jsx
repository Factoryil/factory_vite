import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import TransporteHidrocarburosData from '../data/TransporteHidrocarburosData';


export default function TransporteHidrocarburos() {
  return (
    <>
      <SectionV5
        titulo={TransporteHidrocarburosData.introduccion.titulo}
        contenido={TransporteHidrocarburosData.introduccion.contenido}
      />

      <SectionV3 
        title={TransporteHidrocarburosData.sectionV3.title} 
        datos={TransporteHidrocarburosData.sectionV3.datos}
      />

      <Portafolio
        title={TransporteHidrocarburosData.portafolio.title}
        description={TransporteHidrocarburosData.portafolio.description}
        pdfUrl={TransporteHidrocarburosData.portafolio.pdfUrl}
      />
    </>
  );
}
