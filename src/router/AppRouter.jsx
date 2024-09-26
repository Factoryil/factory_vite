import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutCliente from '../components/layout/LayoutCliente';
import ScrollToTop from '../components/unique/ScrollToTop/ScrollToTop';
import Inicio from '../pages/Inicio';
import Ingenerias from '../pages/Ingenerias';
import IngeneriaCivil from '../pages/IngeneriaCivil';
import IngeneriaElectronica from '../pages/IngeneriaElectronica';
import IngeneriaAmbiental from '../pages/IngeneriaAmbiental';
import IngeneriaElectrica from '../pages/IngeneriaElectrica';
import IngeneriaIndustrial from '../pages/IngeneriaIndustrial';
import IngeneriaMecanica from '../pages/IngeneriaMecanica';
import IngeneriaSistema from '../pages/IngeneriaSistema';
import Contactos from '../pages/Contactos';
import QuienesSomos from '../pages/QuienesSomos';
import Certificados from '../pages/Certificados';
import Logistica from '../pages/Logistica';
import Transportes from '../pages/Transportes';
import TransportesCarga from '../pages/TransportesCarga';
import TransportesEspecial from '../pages/TransportesEspecial';
import TransporteHidrocarburos from '../pages/TransporteHidrocarburos';
import NotFound from '../pages/NotFound';

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutCliente> 
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ingenerias" element={<Ingenerias />} />
          <Route path="/ingenerias/civil" element={<IngeneriaCivil />} />
          <Route path="/ingenerias/electronica" element={<IngeneriaElectronica />} />
          <Route path="/ingenerias/electrica" element={<IngeneriaElectrica />} />
          <Route path="/ingenerias/sistema" element={<IngeneriaSistema />} />
          <Route path="/ingenerias/ambiental" element={<IngeneriaAmbiental />} />
          <Route path="/ingenerias/mecanica" element={<IngeneriaMecanica />} />
          <Route path="/ingenerias/industrial" element={<IngeneriaIndustrial />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/logistica" element={<Logistica />} />
          <Route path="/transportes" element={<Transportes />} />
          <Route path="/transportes/carga" element={<TransportesCarga />} />
          <Route path="/transportes/especial" element={<TransportesEspecial />} />
          <Route path="/transportes/hidrocarburos" element={<TransporteHidrocarburos />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta para la página no encontrada */}
        </Routes>
      </LayoutCliente>
    </Router>
  );
}

export default AppRouter;
