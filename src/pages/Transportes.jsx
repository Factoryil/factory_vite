import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV1 from "../components/common/SectionV1/SectionV1";
import ServiciosGenerales from "../components/common/ServiciosGenerales/ServiciosGenerales";
import TransportesData from '../data/TransportesData';



export default function Transportes() {
  return (
    <>

      <SectionV1
        titulo={TransportesData.acercaDeNosotros.titulo}
        subtitulo={TransportesData.acercaDeNosotros.subtitulo}
        contenido={TransportesData.acercaDeNosotros.contenido}
      />

      <ServiciosGenerales datos={TransportesData.servicios} />

      <Portafolio 
        title={TransportesData.portafolio.title}
        description={TransportesData.portafolio.description}
        pdfUrl={TransportesData.portafolio.pdfUrl}
      />

    </>
  );
}
