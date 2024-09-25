import Portafolio from "../components/common/Portafolio/Portafolio";
import SectionV5 from "../components/common/SectionV5/SectionV5";
import SectionV3 from "../components/common/SectionV3/SectionV3";
import IngeneriasElectronicaData from "../data/IngeneriasElectronicaData";

const IngeneriaElectronica = () => {
  return (
    <>
      <SectionV5
        titulo={IngeneriasElectronicaData.introduccion.titulo}
        contenido={IngeneriasElectronicaData.introduccion.contenido}
      /> 

      <SectionV3 
        title={IngeneriasElectronicaData.sectionV3.title} 
        datos={IngeneriasElectronicaData.sectionV3.datos} 
      />

      <Portafolio 
        title={IngeneriasElectronicaData.portafolio.title}
        description={IngeneriasElectronicaData.portafolio.description}
        pdfUrl={IngeneriasElectronicaData.portafolio.pdfUrl}
      />
    </>
  );
};

export default IngeneriaElectronica;
