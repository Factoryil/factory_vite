import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import TransporteEspecialData from '../data/TransporteEspecialData';


export default function TransportesEspecial() {
  return (
    <>
      <SectionV5
        titulo={TransporteEspecialData.introduccion.titulo}
        contenido={TransporteEspecialData.introduccion.contenido}
      />

      <SectionV3
        title={TransporteEspecialData.sectionV3.title}
        datos={TransporteEspecialData.sectionV3.datos}
      />

      <Portafolio
        title={TransporteEspecialData.portafolio.title}
        description={TransporteEspecialData.portafolio.description}
        pdfUrl={TransporteEspecialData.portafolio.pdfUrl}
      />
    </>
  );
}
