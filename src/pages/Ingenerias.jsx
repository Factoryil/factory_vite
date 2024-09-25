import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV1 from "../components/common/SectionV1/SectionV1";
import ServiciosGenerales from "../components/common/ServiciosGenerales/ServiciosGenerales";
import IngeneriasData from "../data/IngeneriasData";

export default function Ingenerias() {
  return (
    <>
      <SectionV1
        titulo={IngeneriasData.acercaDeNosotros.titulo}
        subtitulo={IngeneriasData.acercaDeNosotros.subtitulo}
        contenido={IngeneriasData.acercaDeNosotros.contenido}
      />

      <ServiciosGenerales datos={IngeneriasData.servicios} />

      <Portafolio 
        title={IngeneriasData.portafolio.title}
        description={IngeneriasData.portafolio.description}
        pdfUrl={IngeneriasData.portafolio.pdfUrl}
      />
    </>
  );
}
