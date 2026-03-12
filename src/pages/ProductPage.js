import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories } from './ExtendedPortfolio';
import './ProductPage.css';

const ProductPage = () => {
  const { category: categoryTitle, id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = categories.find(c => c.title === categoryTitle);
  const productData = category?.images.find(img => img.id === id);

  if (!productData) {
    return <div className="product-page"><h2 style={{ padding: '40px' }}>Product not found</h2></div>;
  }

  return (
    <div className="product-page">
      <nav className="product-nav">
        <button onClick={() => window.history.back()} className="back-btn">Back to Portfolio</button>
      </nav>

      <div className="product-container">
        <div className="product-visuals">
          <div className="main-image-wrapper">
            <img 
              src={productData.src} 
              alt={productData.title} 
              className="main-product-img"
              onError={(e) => {
                e.target.src = `https://picsum.photos/seed/${productData.id}/1200/800`;
              }}
            />
          </div>
          <div className="product-video-wrapper">
            <video autoPlay loop muted playsInline className="product-video" key={productData.video}>
              <source src={productData.video} type="video/mp4" />
            </video>
            <div className="video-label">Product Showcase</div>
          </div>
        </div>

        <div className="product-info">
          <div className="info-content">
            <span className="category-tag">{categoryTitle}</span>
            <h1 className="product-title">{productData.title}</h1>
            <p className="product-description">{productData.description}</p>
            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">Client</span>
                <span className="meta-value">{productData.client}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">Art Direction & Design</span>
              </div>
            </div>
            <div className="product-actions">
              <Link to="/inquire" className="primary-btn" style={{ display: 'inline-block', textAlign: 'center' }}>Inquire Now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {productData.gallery && productData.gallery.length > 0 && (
        <div className="gallery-section">
          <h2 className="gallery-title">Project Gallery</h2>
          <div className="gallery-grid">
            {productData.gallery.map((galleryImg, idx) => (
              <div key={idx} className="gallery-item">
                <img 
                  src={galleryImg} 
                  alt={`${productData.title} gallery ${idx + 1}`}
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${productData.id}-${idx}/800/600`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
