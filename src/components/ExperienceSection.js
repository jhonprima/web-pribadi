'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { experience } from '../data/portfolioData';
import { FaBriefcase, FaCalendarAlt, FaImages, FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ExperienceSection = () => {
  const [imageError, setImageError] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const MAX_PREVIEW = 5;

  // Trigger animasi saat komponen dimuat
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  const openLightbox = (gallery, index) => {
    if (!gallery || gallery.length === 0) return;
    setCurrentGallery(gallery);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentGallery([]);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto'; 
  };

  const nextImage = useCallback((e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === currentGallery.length - 1 ? 0 : prev + 1));
  }, [currentGallery]);

  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? currentGallery.length - 1 : prev - 1));
  }, [currentGallery]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]); 

  return (
    <section className="mb-5 position-relative">
      {/* --- CSS ANIMASI --- */}
      <style jsx>{`
        /* Animasi Masuk */
        .anim-element {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .anim-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card Hover Effect */
        .experience-card {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .experience-card:hover {
          transform: translateY(-5px);
          border-color: rgba(46, 204, 113, 0.5); /* Hijau */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Gallery Thumbnail Hover */
        .gallery-thumb {
          transition: transform 0.2s ease, filter 0.2s;
          cursor: zoom-in;
        }
        .gallery-thumb:hover {
          transform: scale(1.05);
          z-index: 2;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }

        /* Lightbox Animations */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        
        .lightbox-overlay { animation: fadeIn 0.3s forwards; }
        .lightbox-content { animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
      `}</style>

      <div className={`d-flex align-items-center gap-3 mb-5 anim-element ${isVisible ? 'anim-active' : ''}`}>
        <h2 className="section-title text-white mb-0">Experience</h2>
        <div className="flex-grow-1 bg-secondary opacity-25" style={{ height: '1px' }}></div>
      </div>
      
      <div className="d-flex flex-column gap-4">
        {experience.map((exp, index) => {
          const hasMoreImages = exp.gallery && exp.gallery.length > MAX_PREVIEW;
          const remainingCount = exp.gallery ? exp.gallery.length - MAX_PREVIEW + 1 : 0;
          
          return (
            <div 
              key={index} 
              className={`p-4 rounded-4 bg-dark experience-card position-relative anim-element ${isVisible ? 'anim-active' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }} // Staggered Animation
            >
              <div className="d-flex flex-column flex-md-row gap-4">
                
                {/* --- LOGO PERUSAHAAN --- */}
                <div className="flex-shrink-0">
                  {!imageError[index] && exp.image ? (
                    <div className="p-1 rounded-circle border border-secondary border-opacity-25" style={{ width: '90px', height: '90px' }}>
                        <img 
                          src={exp.image} 
                          alt={exp.company} 
                          className="w-100 h-100 rounded-circle object-fit-cover"
                          onError={() => handleImageError(index)}
                        />
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-secondary bg-opacity-10 text-success border border-success border-opacity-25" 
                         style={{ width: '90px', height: '90px' }}>
                      <FaBriefcase size={32} />
                    </div>
                  )}
                </div>

                {/* --- KONTEN --- */}
                <div className="flex-grow-1">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                    <div>
                      <h4 className="mb-1 text-white fw-bold">{exp.position}</h4>
                      <h5 className="text-success mb-1" style={{ opacity: 0.9 }}>{exp.company}</h5>
                    </div>
                    <div className="badge bg-success bg-opacity-10 text-success px-3 py-2 mt-2 mt-md-0 d-flex align-items-center gap-2 border border-success border-opacity-25 rounded-pill">
                      <FaCalendarAlt size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-light mb-4" style={{ opacity: 0.8, lineHeight: '1.7' }}>
                    {exp.description}
                  </p>

                  {exp.githubLink && (
                    <a href={exp.githubLink} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="btn btn-sm btn-outline-light mb-4 d-inline-flex align-items-center gap-2 px-3 py-2"
                       style={{ borderRadius: '50px', transition: 'all 0.3s' }}
                       onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                       onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}

                  {/* --- GALLERY PREVIEW --- */}
                  {exp.gallery && exp.gallery.length > 0 && (
                    <div className="mt-2">
                      <p className="text-muted small mb-2 d-flex align-items-center gap-2 fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                        <FaImages className="text-success"/> Project Gallery
                      </p>
                      
                      <div className="d-flex flex-wrap gap-2">
                        {exp.gallery.slice(0, MAX_PREVIEW).map((img, idx) => {
                          const isLastItem = idx === MAX_PREVIEW - 1;
                          const showOverlay = isLastItem && hasMoreImages;

                          return (
                            <div key={idx} 
                                 className="rounded border border-secondary border-opacity-50 overflow-hidden position-relative gallery-thumb"
                                 style={{ width: '100px', height: '70px' }}
                                 onClick={() => openLightbox(exp.gallery, idx)}
                            >
                              <img 
                                src={img} 
                                alt={`Evidence ${idx}`} 
                                className="w-100 h-100 object-fit-cover"
                              />
                              
                              {showOverlay && (
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-80 d-flex align-items-center justify-content-center text-white fw-bold shadow-inner"
                                     style={{ backdropFilter: 'blur(2px)' }}>
                                  +{remainingCount}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- LIGHTBOX MODAL (ANIMATED) --- */}
      {lightboxOpen && (
        <div 
          className="fixed-top w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-95 lightbox-overlay" 
          style={{ zIndex: 10000, backdropFilter: 'blur(8px)' }}
          onClick={closeLightbox}
        >
          <button className="position-absolute top-0 end-0 m-4 btn text-white p-2 hover-scale" onClick={closeLightbox}>
            <FaTimes size={30} />
          </button>

          <button 
            className="position-absolute start-0 m-3 btn btn-dark rounded-circle p-3 d-none d-md-flex align-items-center justify-content-center border border-secondary"
            onClick={prevImage}
            style={{ width: '50px', height: '50px' }}
          >
            <FaChevronLeft size={20} />
          </button>

          <div className="position-relative text-center lightbox-content" style={{ maxWidth: '90vw', maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
            <img 
              src={currentGallery[currentImageIndex]} 
              alt="Full view" 
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: '80vh', objectFit: 'contain', border: '1px solid #333' }}
            />
            <div className="mt-3 text-white bg-dark bg-opacity-75 py-1 px-4 rounded-pill d-inline-block border border-secondary border-opacity-50">
              {currentImageIndex + 1} / {currentGallery.length}
            </div>
          </div>

          <button 
            className="position-absolute end-0 m-3 btn btn-dark rounded-circle p-3 d-none d-md-flex align-items-center justify-content-center border border-secondary"
            onClick={nextImage}
            style={{ width: '50px', height: '50px' }}
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;