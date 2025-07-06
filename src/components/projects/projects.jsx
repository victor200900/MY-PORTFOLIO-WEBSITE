import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    title: "AnimeVerse – Movie Streaming Platform",
    tech: "Html,Css,React.js,Bootstrap,TheMovieDB API,",
    description: "A responsive anime-themed movie platform with user login, TMDB movie search, genre filtering, trailer preview, and YTS-powered downloads.",
    features: [
  "Responsive UI built with Bootstrap",
  "Dynamic routing using React Router",
  "Clean component-based architecture",
  "Reusable and maintainable code structure",
  "Modern movie card layout",
  "Mobile-friendly design",
  "Deployed live on Vercel",
  "Version controlled using Git & GitHub"
],
    liveLink: "https://your-animeverse-site.com",
    githubLink: "https://github.com/yourusername/animeverse"
  },
  {
    title: "Portfolio Website",
    tech: "HTML, CSS, Bootstrap, JavaScript",
    description: "Clean personal portfolio highlighting your projects, resume, and contact.",
    features: [
      "Mobile-first layout",
      "Scroll-based animations",
      "Dynamic project modal previews"
    ],
    liveLink: "https://your-portfolio-site.com",
    githubLink: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Simple E-Commerce App",
    tech: "React.js, Context API, FakeStoreAPI",
    description: "A functional frontend e-commerce site that demonstrates product listing and cart handling.",
    features: [
      "Product fetch from FakeStoreAPI",
      "Cart operations with Context API",
      "Quantity and total price logic"
    ],
    liveLink: "https://your-ecommerce-site.com",
    githubLink: "https://github.com/yourusername/ecommerce-app"
  }
];

const ProjectSection = () => {
  return (
    <div className="container py-5" id="projects">
      <h2 className="ext-white text-center mb-5">💻 My Projects</h2>
      <div className="row">
        {/* === AnimeVerse Project === */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="src/assets/mov.png"
              className="card-img-top"
              alt="AnimeVerse"
            />
            <div className="card-body">
              <h5 className="card-title">{projects[0].title}</h5>
              <p className="text-muted">{projects[0].tech}</p>
              <p className="card-text">{projects[0].description}</p>
              <ul>
                {projects[0].features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href='https://void-phi-ochre.vercel.app' target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Live</a>
              <a href='https://github.com/victor200900/Void-' target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">GitHub</a>
            </div>
          </div>
        </div>

        {/* === Portfolio Project === */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="src/assets/port.png"
              className="card-img-top"
              alt="Portfolio"
            />
            <div className="card-body">
              <h5 className="card-title">{projects[1].title}</h5>
              <p className="text-muted">{projects[1].tech}</p>
              <p className="card-text">{projects[1].description}</p>
              <ul>
                {projects[1].features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href='https://my-portfolio-website-three-brown.vercel.app' target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Live</a>
              <a href='https://github.com/victor200900/MY-PORTFOLIO-WEBSITE' target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
