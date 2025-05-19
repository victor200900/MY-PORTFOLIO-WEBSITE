import React, { useEffect } from 'react';
import './contact.css'; // Make sure this CSS file is created

const ContactForm = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-pop');
    elements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.2}s`;
      el.classList.add('pop-in');
    });
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
      <div className='contact-card animate-pop'>
        <h2 className='glowing-title animate-pop'>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-field animate-pop'>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Victor"
              required
            />
          </div>

          <div className='form-field animate-pop'>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g., 07012345678"
              required
            />
          </div>

          <div className='form-field animate-pop'>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Speak your mind..."
              rows="5"
              required
            />
          </div>

          <button type="submit" className="contact-btn animate-pop">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
