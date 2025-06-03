import React from 'react';
import './resume.css';

const ResumeSection = () => {
  return (
    <section className="resume-section py-5" id="resume">
      <div className="container text-center">
        <h2 className="section-title mb-5" data-aos="zoom-in">RESUME</h2>

        <div className="row mb-5">
          {/* Education */}
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="resume-card p-4 h-100">
              <h4 className="resume-heading mb-3">🎓 Education</h4>
              <div className="resume-item mb-3">
                <h5>Federal Science and Technical College</h5>
                <span className="resume-date">2022 - 2025</span>
                <p>Science</p>
              </div>
              {/* Add more education items here if needed */}
            </div>
          </div>

          {/* Experience */}
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="resume-card p-4 h-100">
              <h4 className="resume-heading mb-3">💼 Experience</h4>
              <div className="resume-item mb-3">
                <h5>Frontend Developer Intern</h5>
                <span className="resume-date">nov - may 2025</span>
                <p>Built dynamic UIs with React + Bootstrap. Enhanced user engagement.</p>
              </div>
              {/* Add more experience items here if needed */}
            </div>
          </div>
        </div>

        <div className="row">
          {/* Skills */}
          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="resume-card p-4 h-100">
              <h4 className="resume-heading mb-3">🧠 Skills</h4>
              <ul className="resume-list">
                <li>HTML / CSS / JavaScript</li>
                <li>ReactJS</li>
                <li>Bootstrap</li>
                 <li>Tailwind</li>
                <li>MongoDB (basic)</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="resume-card p-4 h-100">
              <h4 className="resume-heading mb-3">📄 Certifications</h4>
              <ul className="resume-list">
                <li>
                  <a
                    href="https://drive.google.com/file/d/1fPqWSYB49YjOcpJMlmYU-4fZICFxaH9m/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                  >
                    Full stack software-development - Gomycode
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
