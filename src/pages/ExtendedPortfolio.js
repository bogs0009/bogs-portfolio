import React, { useState } from 'react';
import './ExtendedPortfolio.css';
import { Link } from 'react-router-dom';


const categories = [
  {
    title: 'QOTD',
    images: ['/images/QOTD/qotd1.jpg', '/images/QOTD/qotd2.jpg',
              '/images/QOTD/qotd3.jpg', '/images/QOTD/qotd4.jpg',
              '/images/QOTD/qotd5.jpg', '/images/QOTD/qotd6.jpg',
              '/images/QOTD/qotd7.jpg', '/images/QOTD/qotd8.jpg',
              '/images/QOTD/qotd9.jpg', '/images/QOTD/qotd10.jpg',
              '/images/QOTD/qotd11.jpg', '/images/QOTD/qotd12.jpg',
              '/images/QOTD/qotd13.jpg', '/images/QOTD/qotd14.jpg',
              '/images/QOTD/qotd15.jpg', '/images/QOTD/qotd16.jpg',
              '/images/QOTD/qotd17.jpg', '/images/QOTD/qotd18.jpg',
              '/images/QOTD/qotd19.jpg', '/images/QOTD/qotd20.jpg',
              '/images/QOTD/qotd21.jpg', '/images/QOTD/qotd22.jpg',
              '/images/QOTD/qotd23.jpg', '/images/QOTD/qotd24.jpg',
              '/images/QOTD/qotd25.jpg', '/images/QOTD/qotd26.jpg',
              '/images/QOTD/qotd27.jpg', '/images/QOTD/qotd28.jpg',
              '/images/QOTD/qotd29.jpg', '/images/QOTD/qotd30.jpg',
              '/images/QOTD/qotd31.jpg', '/images/QOTD/qotd32.jpg',
              '/images/QOTD/qotd33.jpg', '/images/QOTD/qotd34.jpg',
              '/images/QOTD/qotd35.jpg', '/images/QOTD/qotd36.jpg',
              '/images/QOTD/qotd37.jpg', '/images/QOTD/qotd38.jpg',
              '/images/QOTD/qotd39.jpg', '/images/QOTD/qotd40.jpg',
              '/images/QOTD/qotd41.jpg', '/images/QOTD/qotd42.jpg',
              '/images/QOTD/qotd43.jpg', '/images/QOTD/qotd44.jpg',
              '/images/QOTD/qotd45.jpg', '/images/QOTD/qotd46.jpg',
              '/images/QOTD/qotd47.jpg', '/images/QOTD/qotd48.jpg',
              '/images/QOTD/qotd49.jpg',],
  },
  {
   title: 'Graphics',
   images: ['/images/graphics/gph1.png', '/images/graphics/gph2.jpg',
             ],
 },
 {
   title: 'Web',
   images: ['/images/web/web1.jpg', '/images/web/web2.jpg',
           '/images/web/web3.jpg', '/images/web/web4.jpg',
           '/images/web/web5.jpg', ],
 },
 {
   title: 'Branding',
   images: ['/images/branding/brand1.jpg', '/images/branding/brand2.jpg',
             ],
 },
 {
  title: 'Logo',
   images: ['/images/logo/logo1.jpg', '/images/logo/logo2.jpg',
            '/images/logo/logo3.jpg',],
 },
];


const ExtendedPortfolio = () => {
  // which category is open (null = none). This makes an accordion (one open at a time).
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="extended-portfolio">
      <h1>My Works</h1>
      <Link to="/" className="back-link">← Back to Home</Link>

      <div className="folders">
        {categories.map((cat, i) => (
          <div key={i} className="category-section">
            <button
              className={`category-header ${openIndex === i ? 'open' : ''}`}
              onClick={() => toggleCategory(i)}
              aria-expanded={openIndex === i}
              aria-controls={`cat-${i}`}
            >
              <span className="folder-left">
                <span className="category-title">{cat.title}</span>
              </span>
              <span className="chevron" aria-hidden="true">
                {openIndex === i ? '▲' : '▼'}
              </span>
            </button>

            <div
              id={`cat-${i}`}
              className={`category-content ${openIndex === i ? 'open' : ''}`}
              >
              <div className="category-images">
                {cat.images.map((src, idx) => (
                  <img
                  key={idx}
                  src={src}
                  alt={`${cat.title} ${idx + 1}`}
                  className="portfolio-img"
                  loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtendedPortfolio;
