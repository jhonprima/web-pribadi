'use client';
import { useState } from 'react';
// Import Image dari Next.js untuk optimasi
import Image from 'next/image'; 
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
                  // FIX: Mengganti <img> dengan <Image> untuk performa
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      quality={85}
                    />
                  </div>
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
                    // FIX: Menggunakan kombinasi tech+index untuk key yang lebih baik
                    <span key={`${tech}-${idx}`} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* --- TOMBOL DI KARTU UTAMA --- */}
                <div className="portfolio-actions d-flex gap-2">
                    {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-live-demo" // Styling baru untuk Live Demo
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={16} />
                          <span>Live Demo</span>
                        </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-github"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                </div>
                {/* --- AKHIR TOMBOL DI KARTU UTAMA --- */}

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
                <FaExternalLinkAlt className="w-4 h-4" />
              </button>
            </div>
            <div className="modal-body">
              {selectedProject.image && (
                // FIX: Mengganti <img> dengan <Image> di modal
                <div className="portfolio-detail-image mb-4" style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                    <Image 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      fill 
                      sizes="100vw"
                      style={{ objectFit: 'cover' }}
                      quality={90}
                    />
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

              {/* --- TOMBOL DI MODAL --- */}
              <div className="d-flex gap-3 mt-4">
                  {selectedProject.demoLink && (
                    <a 
                      href={selectedProject.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success d-flex align-items-center"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary d-flex align-items-center"
                    >
                      <FaGithub className="me-2" />
                      View Code on GitHub
                    </a>
                  )}
              </div>
              {/* --- AKHIR TOMBOL DI MODAL --- */}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
