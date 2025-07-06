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

              <div className="resume-item mb-4">
                <h5>Frontend Developer Intern – Gomycode</h5>
                <span className="resume-date">Nov 2024 – May 2025</span>
                <p>
                  • Built responsive UIs using React.js, Bootstrap, and Tailwind.<br />
                  • Implemented React Router for seamless page navigation and SPA experience.<br />
                  • Integrated third-party APIs like TheMovieDB to fetch and render dynamic data.<br />
                  • Worked on GitHub daily — handled version control, pull requests, and collaboration.
                </p>
              </div>

              <div className="resume-item mb-3">
                <h5>Freelance Frontend Developer – A.V.E_Studio</h5>
                <span className="resume-date">Feb 2024 – Present</span>
                <p>
                  • Designed and deployed portfolio and movie streaming projects using Vercel.<br />
                  • Optimized page performance and mobile responsiveness.<br />
                  • Used Context API to manage state in small e-commerce app.<br />
                  • Delivered UI edits and landing pages for local clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === Skills & Certifications === */}
        <div className="row">
          {/* Skills */}
          <div className="col-md-6 mb-4">
            <div className="resume-card p-4 h-100">
              <h4 className="resume-heading mb-3">🧠 Skills</h4>
              <ul className="resume-list">
                <li>HTML / CSS / JavaScript</li>
                <li>ReactJS</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="resume-card p-4 h-100">
              <h4 className="resume-heading mb-3" id="cert">📄 Certifications</h4>
              <ul className="resume-list">
                <li>
                  <a
                    href="https://drive.google.com/file/d/1fPqWSYB49YjOcpJMlmYU-4fZICFxaH9m/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                  >
                    Full Stack Software Development – Gomycode
                  </a>
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
