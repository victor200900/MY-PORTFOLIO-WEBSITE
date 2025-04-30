import React, { useState } from 'react';
import './contact.css'; // Assuming you have a CSS file for styling

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendWhatsAppMessage = (e) => {
    e.preventDefault(); // prevent normal form submit

    const phoneNumber = '2347045939049'; // example: '2348012345678' (Nigeria code + number, no '+' sign)
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/${2347045939049}?text=${text}`;

    window.open(url, '_blank'); // open WhatsApp
  };

  return (
    <section id="contact" className="py-5" style={{  background: '' }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" >
          
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={sendWhatsAppMessage}>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ background: 'black', color: 'white', border: '1px solid #30363d' }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ background: 'black', color: 'white', border: '1px solid #30363d' }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="5" 
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ background: 'black', color: 'white', border: '1px solid #30363d' }}
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5 py-2" style={{ fontWeight: 'bold', letterSpacing: '1px',background:'black', color:"aquamarine", }}>
                   Message me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
