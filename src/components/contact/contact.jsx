import React, { useEffect } from 'react';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const text = `Hello, I'm ${name}.\nPhone: ${phone}\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/2347045939049?text=${encodedText}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className='contact-wrapper' id='contact'>
      <div className='contact-card' data-aos="zoom-in">
        <h2 className='glowing-title' data-aos="fade-down">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-field' data-aos="fade-up" data-aos-delay="100">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Victor"
              required
            />
          </div>

          <div className='form-field' data-aos="fade-up" data-aos-delay="200">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g., 07012345678"
              required
            />
          </div>

          <div className='form-field' data-aos="fade-up" data-aos-delay="300">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Speak your mind..."
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="contact-btn"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
