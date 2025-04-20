import React from 'react';
import './resume.css';

const ResumeSection = () => {
  return (
    <div className="container py-5" id="resume">
      <h2 className="text-center mb-5 fw-bold">Resume</h2>

      {/* Timeline */}
      <div className="row g-4">
        <div className="col-md-6">
          <h4 className="text-primary fw-semibold">Education</h4>
          <div className="border-start ps-3">
            <div className="mb-4">
              <h5>Bachelor of Computer Science</h5>
              <small className="text-muted">University Name | 2022 - 2026</small>
              <p className="mb-0">Focused on algorithms, web development, and software engineering.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h4 className="text-primary fw-semibold">Experience</h4>
          <div className="border-start ps-3">
            <div className="mb-4">
              <h5>Frontend Developer Intern</h5>
              <small className="text-muted">Tech Company | Jun - Aug 2024</small>
              <p className="mb-0">Built React + Bootstrap interfaces, improved UI/UX responsiveness.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills and Certifications */}
      <div className="row mt-5 g-4">
        <div className="col-md-6">
          <h4 className="text-primary fw-semibold">Skills</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">HTML / CSS / JavaScript</li>
            <li className="list-group-item">ReactJS</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">MongoDB (basic)</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h4 className="text-primary fw-semibold">Certifications</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Responsive Web Design – freeCodeCamp</li>
            <li className="list-group-item">JavaScript Algorithms – freeCodeCamp</li>
            <li className="list-group-item">Frontend Development – XYZ Bootcamp</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
