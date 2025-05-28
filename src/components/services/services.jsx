import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title"> My Services</h2>
        <p className="section-subtitle">Blending code with creativity — like a main character who actually trains.</p>

        <div className="services-grid">
          <div className="service-card">
            <h3>🌐 Web Development</h3>
            <p>Responsive, modern websites using React, Bootstrap, and just a pinch of anime energy.</p>
          </div>

          <div className="service-card">
            <h3>🧠 Backend Development</h3>
            <p>Secure APIs and solid backend logic with Node.js, MongoDB — dependable like Tanjiro’s resolve.</p>
          </div>

          <div className="service-card">
            <h3>🎨 Frontend Development</h3>
            <p>Visually stunning UIs built to feel like they came from a sci-fi anime control panel.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
