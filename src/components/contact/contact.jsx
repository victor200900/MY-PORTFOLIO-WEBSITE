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
    borderRadius: '20px', // Anime soft rounded corners
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    border: '1px solid #ddd', // Soft border for card
  },
  title: {
    marginBottom: '24px',
    textAlign: 'center',
    fontSize: '2rem', // Larger text for anime style
    color: '#6A5ACD', // Anime soft purple
  },
  field: {
    marginBottom: '20px', // More spacing between fields for a cleaner look
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#444',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #ccc',
    borderRadius: '12px', // Soft rounded edges
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    background: 'rgba(255, 255, 255, 0.8)', // Light background to match anime aesthetics
  },
  inputFocus: {
    borderColor: '#6A5ACD', // Purple border on focus
    boxShadow: '0 0 5px rgba(106, 90, 205, 0.7)', // Soft purple glow
  },
  button: {
    width: '100%',
    padding: '14px',
    background: '#6A5ACD', // Anime purple
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background 0.3s, transform 0.3s',
  },
  buttonHover: {
    background: '#4B3F87', // Darker purple on hover
    transform: 'scale(1.05)', // Button scaling effect
  }
};

export default ContactForm;
