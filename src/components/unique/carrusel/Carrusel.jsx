import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carrusel.css';
import { Link } from 'react-router-dom';
import iconprevc from '../../../assets/images/carrusel/left-arrow-svgrepo-com.svg';
import iconnextc from '../../../assets/images/carrusel/next-right-arrow-svgrepo-com.svg';

const Carrusel = ({ slidesData }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!swiperRef.current) return;
      if (event.key === 'ArrowRight') {
        swiperRef.current.slideNext();
      } else if (event.key === 'ArrowLeft') {
        swiperRef.current.slidePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
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
            swiperRef.current = swiper;
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="swiper-slide"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              >
                <div className="overlay"></div>
                <div className="contenedor-contenido-carrusel">
                  <div className="title" data-swiper-parallax="-300">{slide.title}</div>
                  <div className="subtitle" data-swiper-parallax="-200">{slide.subtitle}</div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>{slide.text}</p>
                  </div>
                  <div className="contenedor-link-carrusel">
                    {slide.links.map((link, index) => (
                      <Link key={index} to={link.to} className={`item-link-carrusel ${link.className}`}>
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next" ref={navigationNextRef}>
            <img src={iconnextc} alt="Next" />
          </div>
          <div className="swiper-button-prev" ref={navigationPrevRef}>
            <img src={iconprevc} alt="Previous" />
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Carrusel;
