import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    title: "AnimeVerse – Movie Streaming Platform",
    tech: "Html, Css, React.js, Bootstrap, TheMovieDB API",
    description:
      "A responsive anime-themed movie platform with user login, TMDB movie search, genre filtering, trailer preview, and YTS-powered downloads.",
    features: [
      "Responsive UI built with Bootstrap",
      "Dynamic routing using React Router",
      "Clean component-based architecture",
      "Reusable and maintainable code structure",
      "Modern movie card layout",
      "Mobile-friendly design",
      "Deployed live on Vercel",
      "Version controlled using Git & GitHub",
    ],
    liveLink: "https://void-phi-ochre.vercel.app",
    githubLink: "https://github.com/victor200900/Void-",
    image: "/mov.png", // ✅ image from public/
  },
  {
    title: "Portfolio Website",
    tech: "HTML, CSS, Bootstrap, JavaScript",
    description:
      "Clean personal portfolio highlighting your projects, resume, and contact.",
    features: [
      "Mobile-first layout",
      "Scroll-based animations",
      "Dynamic project modal previews",
    ],
    liveLink: "https://my-portfolio-website-three-brown.vercel.app",
    githubLink: "https://github.com/victor200900/MY-PORTFOLIO-WEBSITE",
    image: "/port.png", // ✅ image from public/
  },

];

const ProjectSection = () => {
  return (
    <div className="container py-5" id="projects">
      <h2 className="text-white text-center mb-5">💻 My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="text-muted">{project.tech}</p>
                <p className="card-text">{project.description}</p>
                <ul>
                 
                </ul>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
