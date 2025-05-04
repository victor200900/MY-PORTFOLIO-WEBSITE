import React from 'react';
import './services.css';

const Services = () => {
  return (
    <>
    <section className="services-section py-5" id="services">
      <div className="container">
        <h2 className="text-center mb-5 section-title">My Services</h2>

        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="service-card">
              <h5 className="service-title">Web Development</h5>
              <p className="service-desc">
                Responsive and elegant websites built with React, Bootstrap, and modern web technologies.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="service-card">
              <h5 className="service-title">Backend development</h5>
              <p className="service-desc">
                Clean and user-friendly interface designs with a focus on smooth user experience.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="service-card">
              <h5 className="service-title">Frontend Development</h5>
              <p className="service-desc">
                Building dynamic frontends using ReactJS, JavaScript, and responsive design techniques.
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  </>
  );
};

export default Services;
