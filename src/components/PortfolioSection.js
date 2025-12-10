'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { portfolio } from '../data/portfolioData';
import { FaFolderOpen, FaExternalLinkAlt, FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animasi saat komponen dimuat
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    // Mencegah scroll pada body saat modal terbuka
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const navigateGallery = (direction) => {
    if (!selectedProject || !selectedProject.gallery) return;

    const totalImages = selectedProject.gallery.length;
    let newIndex = currentImageIndex;

    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % totalImages;
    } else if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <section className="mb-5">
      {/* --- CSS ANIMASI --- */}
      <style jsx>{`
        /* Animasi Masuk (Fade Up) */
        .anim-element {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .anim-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hover Effect pada Card */
        .portfolio-card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .portfolio-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(46, 204, 113, 0.15); /* Aksen Hijau Halus */
        }
        .portfolio-card-hover:hover .portfolio-image img {
          transform: scale(1.05);
        }

        /* Modal Animations */
        @keyframes modalFadeIn {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(8px); }
        }
        @keyframes modalZoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .custom-modal-backdrop {
          animation: modalFadeIn 0.3s forwards;
          background-color: rgba(0, 0, 0, 0.75);
        }
        .custom-modal-content {
          animation: modalZoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; /* Efek Bouncy sedikit */
        }
      `}</style>

      <div className={`d-flex align-items-center gap-3 mb-5 anim-element ${isVisible ? 'anim-active' : ''}`}>
        <h2 className="section-title mb-0">Portfolio</h2>
        <div className="flex-grow-1 bg-secondary opacity-25" style={{ height: '1px' }}></div>
      </div>
      
      <div className="row g-4">
        {portfolio.map((project, index) => (
          <div 
            key={index} 
            className={`col-md-6 col-lg-4 anim-element ${isVisible ? 'anim-active' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }} // Staggered Animation (Muncul bergantian)
          >
            <div className="portfolio-card portfolio-card-hover h-100 d-flex flex-column" onClick={() => openModal(project)}> 
              <div className="portfolio-image overflow-hidden rounded-top">
                {project.image ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
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
              
              <div className="portfolio-content flex-grow-1 d-flex flex-column">
                <h4 className="portfolio-title">{project.title}</h4>
                <p className="portfolio-description text-truncate-3">{project.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-3 mt-auto">
                  {project.tech.slice(0, 4).map((tech, idx) => ( // Batasi chip agar rapi
                    <span key={`${tech}-${idx}`} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && <span className="tech-badge">+{project.tech.length - 4}</span>}
                </div>
                
                <div className="portfolio-actions d-flex gap-2"> 
                    {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-live-demo flex-grow-1 d-flex justify-content-center align-items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={14} className="me-2"/>
                          <span>Demo</span>
                        </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-github flex-grow-1 d-flex justify-content-center align-items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={16} className="me-2"/>
                        <span>Code</span>
                      </a>
                    )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div 
            className="custom-modal modal-visible custom-modal-backdrop" 
            onClick={closeModal}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Pastikan modal di tengah
        >
          <div className="modal-content modal-large custom-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="mb-0 text-truncate pe-3">{selectedProject.title}</h4>
              <button 
                className="btn-close-custom"
                onClick={closeModal}
              >
                <FaTimes size={18} />
              </button>
            </div>
            <div className="modal-body">
              
              <div className="portfolio-detail-image mb-4 rounded overflow-hidden shadow-sm">
                <div 
                  className="image-carousel-container bg-black" 
                  style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}
                >
                  <Image 
                    key={currentImageIndex} // Key ini penting agar Next.js merender ulang saat index berubah (animasi)
                    src={selectedProject.gallery?.[currentImageIndex] || selectedProject.image} 
                    alt={selectedProject.title} 
                    fill 
                    sizes="100vw"
                    style={{ objectFit: 'contain' }}
                    quality={90}
                    className="anim-active" // Reuse fade animation
                  />

                  {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                    <>
                      <button 
                        className="carousel-nav-btn left-0" 
                        onClick={() => navigateGallery('prev')}
                      >
                        <FaChevronLeft size={20} />
                      </button>
                      <button 
                        className="carousel-nav-btn right-0" 
                        onClick={() => navigateGallery('next')}
                      >
                        <FaChevronRight size={20} />
                      </button>
                      <div className="carousel-indicator">
                        {currentImageIndex + 1} / {selectedProject.gallery.length}
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                    <p className="text-light mb-4" style={{ lineHeight: '1.7' }}>{selectedProject.description}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="text-green mb-3 small text-uppercase fw-bold">Technologies Used</h5>
                <div className="d-flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge-large">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="d-flex gap-3 mt-4 pt-3 border-top border-secondary border-opacity-25">
                  {selectedProject.demoLink && (
                    <a 
                      href={selectedProject.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success flex-grow-1 d-flex align-items-center justify-content-center"
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
                      className="btn btn-outline-light flex-grow-1 d-flex align-items-center justify-content-center"
                    >
                      <FaGithub className="me-2" />
                      View Code
                    </a>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;