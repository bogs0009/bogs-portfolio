import React, { useState } from 'react';
import './PortfolioSection.css';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const images = [
  { id: 1, src: '/images/portfolio/photo1.jpg', alt: 'Photo 1' },
  { id: 2, src: '/images/portfolio/photo2.jpg', alt: 'Photo 2' },
  { id: 3, src: '/images/portfolio/photo3.jpg', alt: 'Photo 3' },
  { id: 4, src: '/images/portfolio/photo4.jpg', alt: 'Photo 4' },
  { id: 5, src: '/images/portfolio/photo5.jpg', alt: 'Photo 5' },
  { id: 6, src: '/images/portfolio/photo6.jpg', alt: 'Photo 6' },
  { id: 7, src: '/images/portfolio/photo7.jpg', alt: 'Photo 7' },
  { id: 8, src: '/images/portfolio/photo8.jpg', alt: 'Photo 8' },
  { id: 9, src: '/images/portfolio/photo9.jpg', alt: 'Photo 9' },
  { id: 10, src: '/images/portfolio/photo10.jpg', alt: 'Photo 10' },
];

const PortfolioSection = () => {
  const [popupImg, setPopupImg] = useState(null);
  const navigate = useNavigate();

  return (
    <Element name='portfolio'>
      <section className="portfolio-section">
        <h2 className="portfolio-title">Portfolio</h2>
        <div className="portfolio-grid">
          {images.map((img, index) => (
            <div className={`portfolio-item item-${index + 1}`} key={img.id}>
              <img
                src={img.src}
                alt={img.alt}
                className="portfolio-img"
                onClick={() => setPopupImg(img.src)}
              />
            </div>
          ))}
        </div>

        <button className="view-more-btn" onClick={() => navigate('/portfolio')}>
          View More
        </button>

        {popupImg && (
          <div className="popup-overlay" onClick={() => setPopupImg(null)}>
            <img src={popupImg} alt="Enlarged" className="popup-img" />
          </div>
        )}
      </section>
    </Element>
  );
};

export default PortfolioSection;

