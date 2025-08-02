import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} John Ryan Silvestre. All rights reserved.</p>
        <p>
          Follow me: 
          <a href="https://www.linkedin.com/in/john-ryan-silvestre-0887ab1ba/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
/*<a href="https://github.com/bogs0009" target="_blank" rel="noopener noreferrer"> Github</a>*/
