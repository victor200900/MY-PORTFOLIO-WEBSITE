import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section className="services-anime-section py-5" id="services">
      <br />
      <div className="container">
        <h2 className="text-center mb-5 section-title text-glow">My services</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="anime-service-card neon-glow">
              <h5 className="service-title">🌐 Web Development</h5>
              <p className="service-desc">
                Beautiful, responsive websites crafted with React, Bootstrap, and the spirit of a true weeb.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="anime-service-card neon-glow">
              <h5 className="service-title">🧠 Backend Development</h5>
              <p className="service-desc">
                Clean APIs and powerful servers — as reliable as a shonen protagonist’s will.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="anime-service-card neon-glow">
              <h5 className="service-title">🎨 Frontend Development</h5>
              <p className="service-desc">
                Interactive UIs that look like they were designed in a futuristic anime control panel.
              </p>
            </div>
          </div>
        </div>

        <hr className="glow-divider" />
      </div>
    </section>
  );
};

export default Services;
