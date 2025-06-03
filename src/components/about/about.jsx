import React from 'react';
import './about.css';
import profilePic from '../../assets/pfp.jpg'; // adjust path if needed

const About = () => {
  return (
    <section className="about-section" id="about" data-aos="fade-up">
      <div className="about-container">
        <div className="about-left" data-aos="zoom-in">
          <img
            src={profilePic}
            alt="Victor"
            className="about-img"
          />
        </div>

        <div className="about-right" data-aos="fade-left">
          <h2 className="about-title" data-aos="fade-down">About Me</h2>
          <p className="about-text" data-aos="fade-up" data-aos-delay="200">
            I’m <strong>Victor</strong>, a creative frontend developer and passionate anime fan. I blend clean UI design with responsive functionality — turning code into art.  
            <br /> <br />
            My goal is to build interfaces that feel like they belong in a high-tech anime — smooth, immersive, and intuitive. I'm currently learning backend tech to become a full-stack dev and create platforms people love.
          </p>
          <div className="about-tags" data-aos="fade-up" data-aos-delay="400">
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
