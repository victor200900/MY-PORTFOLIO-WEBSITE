import React from 'react'
import './services.css'

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      desc: 'Clean, modern, and responsive web designs tailored for all devices.',
      icon: '💻',
      aos: 'fade-up'
    },
    {
      title: 'Frontend Development',
      desc: 'Fast, dynamic user interfaces built with React and Bootstrap.',
      icon: '⚙️',
      aos: 'fade-down'
    },
    {
      title: 'Backend Integration',
      desc: 'Secure APIs and database connectivity using Node and MongoDB.',
      icon: '🔐',
      aos: 'fade-up'
    }
  ]

  return (
    <section className="services-section py-5" id="services">
      <div className="container text-center">
        <h2 className="section-title mb-4">My Services</h2>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={index}
              data-aos={service.aos}
            >
              <div className="service-card p-4 h-100">
                <div className="service-icon mb-3">{service.icon}</div>
                <h4 className="service-title mb-2">{service.title}</h4>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
