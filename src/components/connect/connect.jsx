import React from 'react'
import './connect.css'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const Connect = () => {
  return (
    <div className='connect-container' id='connect'>
      <div className='connect-main' data-aos="fade-up">
        <h2 className='connect-title' data-aos="fade-right">Let's Connect</h2>
        <p className='connect-subtitle' data-aos="fade-left">
           <br /> 
        </p>

        <a
          href="https://www.linkedin.com/in/akpan-victor-119139355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
        >
          <button className='connect-btn'>Let's Work Together</button>
        </a>

        <div className='social-icons' data-aos="fade-up">
          <a href="https://www.linkedin.com/in/akpan-victor-119139355" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/victor200900" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className='connect-footer' data-aos="fade-up">
        <div className='footer-box' data-aos="fade-right">
          <h3 className='footer-name'>Akpan Victor</h3>
          <p className='footer-bio'>
            Let me bring your ideas to life  <br />
            let's connect and create.
          </p>
        </div>
        <div className='footer-box' data-aos="fade-left">
          <h4 className='footer-contact'>Contact</h4>
          <p>
            +234-704-593-9049 <br />
            akpanvictor456@gmail.com <br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Connect
