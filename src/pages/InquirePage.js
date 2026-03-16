import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InquirePage.css';

const InquirePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'design',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mkgzvrob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: 'design',
          budget: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        alert("Oops! There was a problem submitting your form");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="inquire-page">
      <nav className="inquire-nav">
        <button onClick={() => navigate(-1)} className="back-btn">Back</button>
      </nav>

      <div className="inquire-container">
        <div className="inquire-header">
          <span className="subtitle">Let's Collaborate</span>
          <h1 className="title">Start a Project</h1>
          <p className="description">
            Interested in working together? Fill out the form below with some details about your project, 
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="form-wrapper">
          {isSuccess ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Thank You!</h2>
              <p>Your inquiry has been sent successfully. I will get back to you within 24-48 hours.</p>
              <button onClick={() => navigate('/')} className="primary-btn mt-4">Return Home</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="inquire-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company / Brand</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Your Company"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">Project Type</label>
                  <select 
                    id="projectType" 
                    name="projectType" 
                    value={formData.projectType} 
                    onChange={handleChange}
                  >
                    <option value="design">Graphic Design</option>
                    <option value="web">Web Design</option>
                    <option value="branding">Branding & Identity</option>
                    {/* <option value="video">Video & Motion</option> */}
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Estimated Budget</label>
                <select 
                  id="budget" 
                  name="budget" 
                  value={formData.budget} 
                  onChange={handleChange}
                >
                  <option value="">Select a range...</option>
                  <option value="small">&lt; $1,000</option>
                  <option value="medium">$1,000 - $2,000</option>
                  <option value="large">$3,000 - $4,000</option>
                  <option value="enterprise">&gt; $5,000</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Tell me about your goals, timeline, and any specific requirements..."
                  rows="6"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquirePage;