import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carrusel.css';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

const CarruselInicio = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null); // Ref para acceder al swiper instance

  // Manejar los eventos de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!swiperRef.current) return; // Verificar que el swiper esté listo
      if (event.key === 'ArrowRight') {
        swiperRef.current.slideNext(); // Ir al siguiente slide
      } else if (event.key === 'ArrowLeft') {
        swiperRef.current.slidePrev(); // Ir al slide anterior
      }
    };

    window.addEventListener('keydown', handleKeyDown); // Añadir el evento
    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Limpiar el evento al desmontar el componente
    };
  }, []);

  return (
    <div className='contenedor-carruseles'>
      <div className="contenedor-carrusel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Parallax]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 12000, disableOnInteraction: false }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{ clickable: true }}
          parallax={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Guardar la referencia al swiper instance
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <div
              className="swiper-slide"
              style={{ backgroundImage: `url(/img/carrusel/inicio/hero-06.jpg)` }}
            >
              <div className="overlay"></div>
              <div className="contenedor-contenido-carrusel">
                <div className="title" data-swiper-parallax="-300">SOMOS FACTORY</div>
                <div className="subtitle" data-swiper-parallax="-200">INTEGRATED LOGISTICS</div>
                <div className="text" data-swiper-parallax="-100">
                  <p>
                    INGENIERÍA CIVIL, ELECTRÓNICA, ELÉCTRICA, SISTEMAS, MECÁNICA, AMBIENTAL E INDUSTRIAL. LOGÍSTICA “TRANSPORTE ESPECIAL DE PASAJEROS, TRANSPORTE TERRESTRE DE CARGA: SECA, LÍQUIDOS, SÓLIDOS, CONDENSADAS Y PRODUCTOS DERIVADOS DEL PETRÓLEO”, ALQUILER DE VEHÍCULOS Y MAQUINARIA PESADA, COMERCIALIZADOR DE BIENES Y SERVICIOS ONLINE.
                  </p>
                </div>
                <div className="contenedor-link-carrusel">
                  <Link to="/contactos" className="item-link-carrusel color-naranja">CONTÁCTANOS</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="swiper-slide"
              style={{ backgroundImage: `url(/img/carrusel/inicio/slider-1.jpg)` }}
            >
              <div className="overlay"></div>
              <div className="contenedor-contenido-carrusel">
                <div className="title" data-swiper-parallax="-300">Visión Innovadora</div>
                <div className="subtitle" data-swiper-parallax="-200">VANGUARDISTA DEL MERCADO</div>
                <div className="text" data-swiper-parallax="-100">
                  <p>
                    PRESTANDO SOLUCIONES INTEGRALES QUE POTENCIAN LA ECONOMÍA DE SU EMPRESA,
                    OFRECIENDO ESTRATEGIAS PERSONALIZADAS QUE SE ADAPTAN A SUS NECESIDADES ESPECÍFICAS.
                    NUESTRA MISIÓN ES IMPULSAR SU CRECIMIENTO MEDIANTE INNOVACIONES CONSTANTES Y UNA
                    ATENCIÓN EXCEPCIONAL AL CLIENTE.
                  </p>
                </div>
                <div className="contenedor-link-carrusel">
                  <Link to="/quienes-somos" className="item-link-carrusel color-naranja">CONOCE MÁS</Link>
                  <Link to="/contactos" className="item-link-carrusel color-azul">ESCRÍBENOS</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="swiper-button-next" ref={navigationNextRef}>
            <img src="/img/carrusel/next-right-arrow-svgrepo-com.svg" alt="Next" />
          </div>
          <div className="swiper-button-prev" ref={navigationPrevRef}>
            <img src="/img/carrusel/left-arrow-svgrepo-com.svg" alt="Previous" />
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default CarruselInicio;
