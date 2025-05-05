import React from 'react';
import './resume.css';

const ResumeSection = () => {
  return (
    <div className="anime-resume container py-5" id="resume">
      <h2 className="text-center glowing-title mb-5">📜 RESUME</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <h4 className="anime-heading">🎓 Education</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h5>Bachelor of Computer Science</h5>
                <span className="timeline-date">2022 - 2026</span>
                <p>Algorithms, web dev, and software engineering mastery.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h4 className="anime-heading">💼 Experience</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h5>Frontend Developer Intern</h5>
                <span className="timeline-date">Jun - Aug 2024</span>
                <p>Built dynamic UIs with React + Bootstrap. Enhanced user engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 g-4">
        <div className="col-md-6">
          <h4 className="anime-heading">🧠 Skills</h4>
          <ul className="anime-list">
            <li>HTML / CSS / JavaScript</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>MongoDB (basic)</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h4 className="anime-heading">📄 Certifications</h4>
          <ul className="anime-list">
            <li>Responsive Web Design – freeCodeCamp</li>
            <li>JavaScript Algorithms – freeCodeCamp</li>
            <li>Frontend Development – XYZ Bootcamp</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
