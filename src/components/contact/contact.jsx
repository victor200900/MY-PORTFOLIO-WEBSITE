import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('No endpoint set up, but form captured!');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Contact Me</h2>
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
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
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

          <button type="submit" style={styles.button}>Send Message</button>
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
    background: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    marginBottom: '24px',
    textAlign: 'center',
    fontSize: '1.8rem',
    color: '#0077b6',
  },
  field: {
    marginBottom: '18px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    width: '100%',
    padding: '12px',
    background: '#0077b6',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s',
  }
};

export default ContactForm;
