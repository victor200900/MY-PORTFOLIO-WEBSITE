import React from 'react';
import './resume.css';

const ResumeSection = () => {
  return (
    <section className="resume-section py-5" id="resume">
      <div className="container text-center">
        <h2 className="section-title mb-5" data-aos="zoom-in">RESUME</h2>

        <div className="row mb-5">
          {/* === Education === */}
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="resume-card p-4 h-100">
              <h4 className="resume-heading mb-3">🎓 Education</h4>
              <div className="resume-item mb-3">
                <h5>Federal Science and Technical College</h5>
                <span className="resume-date">2022 – 2025</span>
                <p>Science</p>
              </div>
            </div>
          </div>

          {/* === Experience === */}
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="resume-card p-4 h-100">
              <h4 className="resume-heading mb-3">💼 Experience</h4>
<<<<<<< HEAD
              <div className="resume-item mb-3">
                <h5>Frontend Developer Intern</h5>
                <span className="resume-date">nov - may 2025</span>
                <p>Built dynamic UIs with React,Bootstrap,Tailwind,Javascript,Html,Css. Enhanced user engagement.</p>
=======

              <div className="resume-item mb-4">
                <h5>Frontend Developer Intern – Gomycode</h5>
                <span className="resume-date">Nov 2024 – May 2025</span>
                <p>
                  • Built responsive UIs using React.js, Bootstrap, and Tailwind.<br />
                  • Implemented React Router for seamless page navigation and SPA experience.<br />
                  • Integrated third-party APIs like TheMovieDB to fetch and render dynamic data.<br />
                  • Worked on GitHub daily — handled version control, pull requests, and collaboration.
                </p>
>>>>>>> 973ed41d65c24b9bece56c30bbe160fb898d83df
              </div>
            </div>
          </div>
        </div>

        {/* === Skills & Certifications === */}
        <div className="row"data-aos="fade-up">
          {/* Skills */}
<<<<<<< HEAD
          <div className="col-md-6 mb-4"  data-aos="fade-up">
=======
          <div className="col-md-6 mb-4">
>>>>>>> 973ed41d65c24b9bece56c30bbe160fb898d83df
            <div className="resume-card p-4 h-100">
              <h4 className="resume-heading mb-3">🧠 Skills</h4>
              <ul className="resume-list">
                <li>HTML</li>
                 <li>Css</li>
                 <li>Javascript</li>

                <li>ReactJS</li>
                <li>Bootstrap</li>
<<<<<<< HEAD
                 <li>Tailwind</li>
                 <li>Git</li>

=======
                <li>Tailwind</li>
>>>>>>> 973ed41d65c24b9bece56c30bbe160fb898d83df
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="resume-card p-4 h-100">
              <h4 className="resume-heading mb-3" id="cert">📄 Certifications</h4>
              <ul className="resume-list">
                <li>
                  <button className='but'>
                  <a
                    href="https://drive.google.com/file/d/1fPqWSYB49YjOcpJMlmYU-4fZICFxaH9m/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                  >
                    Full Stack Software Development – Gomycode
                  </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
