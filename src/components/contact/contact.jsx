import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const text = `Hello, I'm ${name}.\nPhone: ${phone}\n\n${message}`;
    const encodedText = encodeURIComponent(text);

    // Replace with your actual WhatsApp number (no "+" or leading zeros, include country code)
    const whatsappURL = `https://wa.me/23407045939049?text=${encodedText}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div style={styles.wrapper} id='contact'>
      <div style={styles.card}>
        <h2 className='text-center glowing-title mb-5' style={styles.title}>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.field}>
            <label htmlFor="name" style={styles.label}>Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Victor"
              required
              style={styles.input}
            />
          </div>

        

          <div style={styles.field}>
            <label htmlFor="message" style={styles.label}>Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Speak your mind..."
              rows="5"
              required
              style={{ ...styles.input, resize: 'none', height: '120px' }}
            />
          </div>

          <button type="submit" style={styles.button}>Send via WhatsApp</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    background: 'rgba(0, 0, 0, 0.46)',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    border: '1px solid #132A46',
  },
  title: {
    marginBottom: '24px',
    textAlign: 'center',
    fontSize: '2rem',
  },
  field: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    fontSize: '17px',
    color: 'white',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    background: '#2C255B',
    color: 'white',
  },
  button: {
    width: '100%',
    padding: '14px',
    background: '#6A5ACD',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.2rem',
    transition: 'background 0.3s, transform 0.3s',
  },
};

export default ContactForm;
