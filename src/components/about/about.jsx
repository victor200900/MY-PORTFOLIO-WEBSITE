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
          <h2 className="about-title" >About Me</h2>
          <p className="about-text" data-aos="fade-up" data-aos-delay="200">
            Hi i’m <strong>Victor</strong>, a creative frontend software developer. I blend clean UI design with responsive functionality — turning code into art.  
            <br /> <br />
            My goal is to build interfaces that feel like they belong in a high-tech, smooth, immersive, and intuitive. I'm currently learning backend development to become a full-stack dev and create platforms people love.
          </p>
          <div className="about-tags" data-aos="fade-up" data-aos-delay="400">
            <span>React.js</span>
            <span>Bootstrap</span>
            <span>Tailwindcss</span>
            <span>Javascrpt</span>
            <span>Html</span>
            <span>Css</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
