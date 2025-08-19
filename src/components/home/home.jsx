import React from 'react';
import './home.css';
import pfp from '../../assets/sdfgh.jpg'; // Adjust the path if necessary

const Home = () => {
  return (
    <section className="home-anime-container" id="home">
      <div className="home-anime-overlay" />
      <div className="home-anime-content">
        <img src={pfp} alt="Victor" className="anime-avatar" />
        <div className="anime-text">
          <h1 className="anime-name"> My name is Akpan Victor (VøîD)</h1>
          <h2 className="anime-title">Frontend Software Developer </h2>
          <p className="anime-quote">“SILENT CODER”</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
