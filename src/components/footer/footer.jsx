import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Akpan Victor. All rights reserved.</p>
      </div>
      <div className='icon'>
        
        <div>
      <a href="https://www.linkedin.com/in/akpan-victor-119139355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faLinkedin} className='icons' /></a>
        </div>
        <div>
        <FontAwesomeIcon icon={faInstagram} className='icons' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
