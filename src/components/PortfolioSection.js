'use client';
import { useState } from 'react';
import { portfolio } from '../data/portfolioData';
import { FaFolderOpen, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="mb-5">
      <h2 className="section-title">Portfolio</h2>
      
      <div className="row g-4">
        {portfolio.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="portfolio-card" onClick={() => setSelectedProject(project)}>
              <div className="portfolio-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="portfolio-placeholder">
                    <FaFolderOpen size={64} className="text-green" />
                  </div>
                )}
                <div className="portfolio-overlay">
                  <button className="btn-view-project">View Details</button>
                </div>
              </div>
              <div className="portfolio-content">
                <h4 className="portfolio-title">{project.title}</h4>
                <p className="portfolio-description">{project.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-github"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={16} />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="custom-modal modal-visible" onClick={() => setSelectedProject(null)}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="mb-0">{selectedProject.title}</h4>
              <button 
                className="btn-close-custom"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              {selectedProject.image && (
                <div className="portfolio-detail-image mb-4">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
              )}
              
              <p className="text-muted mb-4">{selectedProject.description}</p>
              
              <div className="mb-4">
                <h5 className="text-green mb-3">Technologies Used</h5>
                <div className="d-flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge-large">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-success"
                >
                  <FaExternalLinkAlt className="me-2" />
                  View Project on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;