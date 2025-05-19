import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <img
            src="src/assets/pfp.jpg"
            alt="Victor"
            className="about-img"
          />
        </div>

        <div className="about-right">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m <strong>Victor</strong>, a creative frontend developer and passionate anime fan. I blend clean UI design with responsive functionality — turning code into art.  
            <br /> <br />
            My goal is to build interfaces that feel like they belong in a high-tech anime — smooth, immersive, and intuitive. I'm currently learning backend tech to become a full-stack dev and create platforms people love.
          </p>
          <div className="about-tags">
            <span>React</span>
            <span>Bootstrap</span>
            <span>MongoDB</span>
            <span>Anime Lover</span>
            <span>Creative UI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
