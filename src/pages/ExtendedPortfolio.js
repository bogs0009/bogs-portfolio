import React, { useState } from 'react';
import './ExtendedPortfolio.css';
import { Link } from 'react-router-dom';


const categories = [
 {
   title: 'Graphics',
   images: ['/images/graphics/gph1.jpg', '/images/graphics/gph2.jpg',
             '/images/graphics/gph3.jpg', '/images/graphics/gph4.jpg',
             '/images/graphics/gph5.jpg', '/images/graphics/gph6.jpg',
             '/images/graphics/gph7.jpg',],
 },
 {
   title: 'Web',
   images: ['/images/web/web1.jpg', '/images/web/web2.jpg',
           '/images/web/web3.jpg', '/images/web/web4.jpg',
           '/images/web/web5.jpg', ],
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
