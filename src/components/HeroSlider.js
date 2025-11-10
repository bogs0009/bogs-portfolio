import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.css';

const slides = [
  {
    id: 3,
    desktop: '/images/Hero2.jpg',
    mobile: '/images/hero2-mobile.jpg',
    caption: 'Logo Design',
  },
  {
    id: 1,
    desktop: '/images/Hero1.jpg',
    mobile: '/images/hero1-mobile.jpg',
    caption: 'Logofolio',
  },
  {
    id: 2,
    desktop: '/images/Hero4.jpg',
    mobile: '/images/hero4-mobile.jpg',
    caption: 'Your Brand, Our Passion',
  },
  {
    id: 5,
    desktop: '/images/Hero5.jpg',
    mobile: '/images/hero5-mobile.jpg',
    caption: 'Ads-solutely Amazing',
  },
  {
    id: 3,
    desktop: '/images/Hero3.jpg',
    mobile: '/images/hero3-mobile.jpg',
    caption: 'Elevate Your Brand',
  },
];

const HeroSlider = () => {
  // Check if screen is mobile size
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="HeroSlider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 10000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img
                src={isMobile ? slide.mobile : slide.desktop}
                alt={slide.caption}
                className="slide-image"
              />
              <div className="caption">
                <h2>{slide.caption}</h2>
              </div>
            </div>
            <div className="swiper-button-prev custom-swiper-arrow"></div>
            <div className="swiper-button-next custom-swiper-arrow"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;


