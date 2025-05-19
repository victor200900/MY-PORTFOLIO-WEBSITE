import React from 'react'
import './connect.css'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const Connect = () => {
  return (
    <div className='connect-container' id='connect'>
      <div className='connect-main'>
        <h2 className='connect-title'>Let's Connect</h2>
        <p className='connect-subtitle'>Reach out for collaborations or just a friendly hello!</p>

        <a
          href="https://www.linkedin.com/in/akpan-victor-119139355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='connect-btn'>Let's Work Together</button>
        </a>

        <div className='social-icons'>
          <a href="https://www.linkedin.com/in/akpan-victor-119139355" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className='connect-footer'>
        <div className='footer-box'>
          <h3 className='footer-name'>Victor</h3>
          <p className='footer-bio'>
            Creative mind. Clean one. Human. <br />
            High design — let's connect and create.
          </p>
        </div>
        <div className='footer-box'>
          <h4 className='footer-contact'>Contact</h4>
          <p>
            +234 704 593 9049 <br />
            vakpan462@gmail.com <br />
            7, Ogunbadejo St, Shomolu, Lagos
          </p>
        </div>
      </div>
    </div>
  )
}

export default Connect
