import React, { useState } from 'react';
import './ExtendedPortfolio.css';
import { Link } from 'react-router-dom';

export const categories = [
  {
    title: 'QOTD',
    images: [
      { 
        id: 'qotd1',
        src: '/images/thumbnails/QOTD-Thumbnail.png', 
        video: '/videos/BOGS-Graphix-Studio.mp4', 
        title: 'Inspirational Quote Design',
        description: 'A vibrant and modern design for Quote of the Day featuring custom typography and relatively great backgrounds. This piece combines elegant typography with bold color choices to create an engaging visual experience.',
        client: 'Personal Project Update Deployment',
        gallery: [
          '/images/QOTD/qotd46.jpg', '/images/QOTD/qotd47.jpg',
        ]
      },
    ],
  },
  {
    title: 'Ads',
    images: [
      { 
        id: 'ad1',
        src: '/images/ads/ad1.jpg', 
        video: '/videos/BOGS-Graphix-Studio.mp4', 
        title: 'Premium Product Campaign',
        description: 'High-end advertisement design for luxury product line. Features sophisticated styling with emphasis on premium positioning and elegance.',
        client: 'Luxury Brands Co.',
        gallery: [
          '/images/ads/ad1.jpg', '/images/ads/ad2.jpg', '/images/ads/ad3.jpg',
        ]
      },
      { 
        id: 'ad2',
        src: '/images/ads/ad4.jpg', 
        video: '/videos/BOGS-Logo.mp4', 
        title: 'Social Media Ad Series',
        description: 'Vibrant social media advertising design optimized for multiple platforms. Designed to increase engagement and drive conversions with eye-catching visuals.',
        client: 'Digital Marketing Experts',
        gallery: [
          '/images/ads/ad4.jpg', '/images/ads/ad5.jpg', '/images/ads/ad6.jpg',  '/images/graphics/gph3.jpg',
        ]
      },
    ],
  },
  {
    title: 'Banners',
    images: [
      { 
        id: 'gph1',
        src: '/images/graphics/gph2.jpg', 
        video: '/videos/BOGS-Graphix-Studio.mp4', 
        title: 'Digital and Prints Banner',
        description: 'Professional digital and prints banner designs featuring dynamic style and modern aesthetic. This banner serves as a strong marketing visual to the brand.',
        client: 'Internal Project',
        gallery: [
          '/images/graphics/City.png', '/images/graphics/gph2.jpg', '/images/graphics/gph4.jpg', '/images/graphics/gph5.jpg',
        ]
      },
      { 
        id: 'gph2',
        src: '/images/graphics/gph3.1.jpg', 
        video: '/videos/BOGS-Logo.mp4', 
        title: 'Website Header Banner',
        description: 'Professional banner design featuring simple minimalist layout and modern aesthetic. This banner serves as a strong visual introduction to the brand.',
        client: 'Internal Project',
        gallery: [
          '/images/graphics/gph3.1.jpg',
        ]
      },
    ],
  },
  {
    title: 'Web',
    images: [
      { 
        id: 'web1',
        src: '/images/thumbnails/COD-Web-Thumb01.png', 
        video: '/videos/BOGS-Graphix-Studio.mp4',
        title: 'City Website',
        description: 'Professional website design featuring responsive layout and modern aesthetic. This serves as a strong user interface and user experience to the brand.',
        client: 'Website Proposal Design',
        gallery: [
          '/images/web/web1.jpg', '/images/web/web2.jpg', '/images/web/web3.jpg', '/images/web/web4.jpg','/images/web/web5.jpg',
        ]
      },
      { 
        id: 'web2',
        src: '/images/thumbnails/BOGS-Web-Thumb.png', 
        video: '/videos/BOGS-Logo.mp4', 
        title: 'Website Header Banner',
        description: 'Professional website design featuring responsive layout and modern aesthetic. This serves as a strong user interface and user experience to the brand.',
        client: 'Web Design Studio',
        gallery: [
          '/images/web/web01.jpg',
        ]
      },
    ],
  },
  {
    title: 'Branding',
    images: [
      { 
        id: 'brand1',
        src: '/images/branding/brand1.jpg', 
        video: '/videos/BOGS-Graphix-Studio.mp4', 
        title: 'Experience Premium Brand',
        description: 'Experience a premium design for luxury product line. Features sophisticated styling with emphasis on premium positioning and elegance.',
        client: 'Luxury Brands Co.',
        gallery: [
          '/images/branding/brand1.jpg', '/images/branding/brand2.jpg',
        ]
      },
      { 
        id: 'brand2',
        src: '/images/branding/brand3.jpg', 
        video: '/videos/BOGS-Logo.mp4', 
        title: 'Experience Premium Brand',
        description: 'Experience a premium design for luxury product line. Features sophisticated styling with emphasis on premium positioning and elegance.',
        client: 'Luxury Brands Co.',
        gallery: [
          '/images/branding/brand3.jpg', '/images/branding/brand4.jpg', '/images/branding/brand5.jpg',
        ]
      },
    ],
  },
  {
    title: 'Logo',
    images: [
      { 
        id: 'Logo1',
        src: '/images/logo/logo1.jpg', 
        video: '/videos/BOGS-Graphix-Studio.mp4', 
        title: 'Company Logo Design',
        description: 'Experience a premium design for luxury product line. Features sophisticated styling with emphasis on premium positioning and elegance.',
        client: 'Aplhagrand Group',
        gallery: [
          '/images/logo/logo1.jpg',
        ]
      },
      { 
        id: 'Logo2',
        src: '/images/logo/logo2.jpg', 
        video: '/videos/BOGS-Logo.mp4', 
        title: 'Influencer Logo Design',
        description: 'Experience a premium design for luxury product line. Features sophisticated styling with emphasis on premium positioning and elegance.',
        client: 'Social Media Personality',
        gallery: [
          '/images/logo/logo2.jpg', 
        ]
      },
      { 
        id: 'Logo3',
        src: '/images/logo/logo3.jpg', 
        video: '/videos/BOGS-Graphix-Studio.mp4', 
        title: 'Inspirational Quotes Page',
        description: 'Experience a premium design for luxury product line. Features sophisticated styling with emphasis on premium positioning and elegance.',
        client: 'Personal Project',
        gallery: [
          '/images/logo/logo3.jpg',
        ]
      },
    ],
  },
];

const ExtendedPortfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="extended-portfolio">
      <div className="video-hero">
        <video autoPlay loop muted playsInline className="hero-video" key="hero-video">
          <source src="/videos/BOGS-Graphix-Studio.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay">
          <h1>My Works</h1>
          <Link to="/" className="back-link">Back to Home</Link>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="tab-nav">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`tab-button ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
              aria-selected={activeTab === i}
              role="tab"
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <div className="category-images">
            {categories[activeTab].images.map((item, idx) => (
              <Link 
                key={idx} 
                to={`/product/${categories[activeTab].title}/${item.id}`}
                className="portfolio-link"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="portfolio-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${item.id}/800/800`;
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendedPortfolio;
