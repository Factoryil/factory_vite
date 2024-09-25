import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import TransporteCargaData from '../data/TransporteCargaData';


export default function TransportesCarga() {
  return (
    <>
      <SectionV5
        titulo={TransporteCargaData.introduccion.titulo}
        contenido={TransporteCargaData.introduccion.contenido}
      />

      <SectionV3
        title={TransporteCargaData.sectionV3.title}
        datos={TransporteCargaData.sectionV3.datos}
      />

      <Portafolio
        title={TransporteCargaData.portafolio.title}
        description={TransporteCargaData.portafolio.description}
        pdfUrl={TransporteCargaData.portafolio.pdfUrl}
      />
    </>
  );
}
