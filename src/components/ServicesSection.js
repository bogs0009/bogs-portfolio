import React from 'react';
/* import StarRating from './StarRating'; */
import { Element } from 'react-scroll';

import './ServicesSection.css';

const services = [
  {
    title: 'Graphic Design',
    image: '/images/graphics1.jpg',
    feedback: '“Let us turn your ideas into a beautiful digital canvas!”',
    rating: 5,
  },
  {
    title: 'Web Design',
    image: '/images/webdev.jpg',
    feedback: '“Want to make your website awesome?”',
    rating: 5,
  },
  {
    title: 'Branding',
    image: '/images/graphics2.jpg',
    feedback: '“Want to make your brand stand-out?”',
    rating: 5,
  },
  {
    title: 'Front End Web Dev',
    image: '/images/webdev2.jpg',
    feedback: '“Let us build your website come to life!”',
    rating: 5,
  },
];

const ServicesSection = () => {
  return (
    <Element name="services">
      <section id="ServicesSection" className="services-section">
        <h2 className="section-title">Services Offered</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${index % 2 === 0 ? 'normal' : 'reverse'}`}
            >
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-feedback">{service.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default ServicesSection;

/*<StarRating rating={service.rating} />*/