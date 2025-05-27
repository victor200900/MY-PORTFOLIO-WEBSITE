import React from 'react';
import './home.css';
import profilePic from '../assets/pfp.jpg'; // adjust path if needed

const Home = () => {
  return (
    <section className="home-anime-container" id="home">
      <div className="home-anime-overlay" />
      <div className="home-anime-content">
        <img src={profilePic} alt="Victor" className="anime-avatar" />
        <div className="anime-text">
          <h1 className="anime-name">Hi, My name is Akpan Victor</h1>
          <h2 className="anime-title">Full Stack Software Developer</h2>
          <p className="anime-quote">“I am a passionate individual.”</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
