import React from 'react';
import './ExtendedPortfolio.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Graphics',
    images: ['/images/graphics/gph1.jpg', '/images/graphics/gph2.jpg',
              '/images/graphics/gph3.jpg', '/images/graphics/gph4.jpg',
              '/images/graphics/gph5.jpg', '/images/graphics/gph6.jpg',
              '/images/graphics/gph7.jpg'],
  },
  {
    title: 'Web',
    images: ['/images/web/web1.jpg', '/images/web/web2.jpg',
            '/images/web/web3.jpg', '/images/web/web4.jpg',
            '/images/web/web5.jpg', '/images/web/web6.jpg',
            '/images/web/web7.jpg'],
  },
];

const ExtendedPortfolio = () => {
  return (
    <div className="extended-portfolio">
      <h1>My Works</h1>
      <Link to="/" className="back-link">← Back to Home</Link>

      {categories.map((cat, i) => (
        <div key={i} className="category-section">
          <h2>{cat.title}</h2>
          <div className="category-images">
            {cat.images.map((src, index) => (
              <img key={index} src={src} alt={`${cat.title}-${index}`} className="portfolio-img" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtendedPortfolio;
