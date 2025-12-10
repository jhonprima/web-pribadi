import React, { useState, useEffect } from 'react';
import { experience } from '../data/portfolioData';
import { FaBriefcase, FaCalendarAlt, FaImages, FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ExperienceSection = () => {
  // --- STATE ---
  const [imageError, setImageError] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // KONFIGURASI: Jumlah gambar preview yang ingin ditampilkan
  const MAX_PREVIEW = 5;

  // --- HANDLERS ---
  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  // Buka Lightbox
  const openLightbox = (gallery, index) => {
    if (!gallery || gallery.length === 0) return;
    setCurrentGallery(gallery);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  // Tutup Lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentGallery([]);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto'; 
  };

  // Navigasi Lightbox
  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === currentGallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? currentGallery.length - 1 : prev - 1));
  };

  // Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentGallery]); 

  return (
    <section className="mb-5 position-relative">
      <h2 className="section-title text-white mb-4">Experience</h2>
      
      <div className="d-flex flex-column gap-4">
        {experience.map((exp, index) => {
          // LOGIKA HITUNG SISA GAMBAR
          const hasMoreImages = exp.gallery && exp.gallery.length > MAX_PREVIEW;
          const remainingCount = exp.gallery ? exp.gallery.length - MAX_PREVIEW + 1 : 0;
          
          return (
            <div key={index} className="p-4 rounded bg-dark border border-secondary shadow-sm">
              <div className="d-flex flex-column flex-md-row gap-4">
                
                {/* --- KIRI: LOGO --- */}
                <div className="flex-shrink-0">
                  {!imageError[index] && exp.image ? (
                    <div style={{ width: '80px', height: '80px' }}>
                      <img 
                        src={exp.image} 
                        alt={exp.company} 
                        className="w-100 h-100 rounded-circle object-fit-cover border border-success"
                        onError={() => handleImageError(index)}
                      />
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-secondary bg-opacity-25 text-success" 
                         style={{ width: '80px', height: '80px' }}>
                      <FaBriefcase size={30} />
                    </div>
                  )}
                </div>

                {/* --- KANAN: KONTEN --- */}
                <div className="flex-grow-1">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-2">
                    <div>
                      <h4 className="mb-1 text-white fw-bold">{exp.position}</h4>
                      <h5 className="text-success mb-1">{exp.company}</h5>
                    </div>
                    <div className="badge bg-success bg-opacity-10 text-success px-3 py-2 mt-2 mt-md-0 d-flex align-items-center gap-2 border border-success border-opacity-25">
                      <FaCalendarAlt size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-light mb-3" style={{ opacity: 0.85, lineHeight: '1.6' }}>
                    {exp.description}
                  </p>

                  {/* TOMBOL GITHUB */}
                  {exp.githubLink && (
                    <a href={exp.githubLink} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="btn btn-sm btn-outline-light mb-4 d-inline-flex align-items-center gap-2"
                       style={{ borderRadius: '50px' }}>
                      <FaGithub /> Source Code
                    </a>
                  )}

                  {/* --- GALLERY PREVIEW (GRID SYSTEM) --- */}
                  {exp.gallery && exp.gallery.length > 0 && (
                    <div>
                      <p className="text-muted small mb-2 d-flex align-items-center gap-2">
                        <FaImages /> Project Gallery:
                      </p>
                      
                      {/* Container Gambar: Flex Wrap agar rapi tanpa scroll */}
                      <div className="d-flex flex-wrap gap-2">
                        {exp.gallery.slice(0, MAX_PREVIEW).map((img, idx) => {
                          // Cek apakah ini gambar terakhir di preview DAN masih ada sisa gambar
                          const isLastItem = idx === MAX_PREVIEW - 1;
                          const showOverlay = isLastItem && hasMoreImages;

                          return (
                            <div key={idx} 
                                 className="rounded border border-secondary overflow-hidden position-relative"
                                 style={{ width: '100px', height: '70px', cursor: 'pointer' }}
                                 onClick={() => openLightbox(exp.gallery, idx)}
                            >
                              <img 
                                src={img} 
                                alt={`Evidence ${idx}`} 
                                className="w-100 h-100 object-fit-cover"
                                style={{ transition: 'transform 0.3s' }}
                                onMouseEnter={(e) => !showOverlay && (e.currentTarget.style.transform = 'scale(1.1)')}
                                onMouseLeave={(e) => !showOverlay && (e.currentTarget.style.transform = 'scale(1)')}
                              />
                              
                              {/* OVERLAY "+X See More" */}
                              {showOverlay && (
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-white fw-bold"
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

      {/* --- LIGHTBOX MODAL --- */}
      {lightboxOpen && (
        <div 
          className="fixed-top w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-95" 
          style={{ zIndex: 10000, backdropFilter: 'blur(5px)' }}
          onClick={closeLightbox}
        >
          <button className="position-absolute top-0 end-0 m-4 btn text-white p-2" onClick={closeLightbox}>
            <FaTimes size={30} />
          </button>

          <button 
            className="position-absolute start-0 m-3 btn btn-dark rounded-circle p-3 d-none d-md-block"
            onClick={prevImage}
          >
            <FaChevronLeft size={24} />
          </button>

          <div className="position-relative text-center" style={{ maxWidth: '90vw', maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
            <img 
              src={currentGallery[currentImageIndex]} 
              alt="Full view" 
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: '80vh', objectFit: 'contain', border: '1px solid #333' }}
            />
            <div className="mt-3 text-white bg-dark bg-opacity-75 py-1 px-4 rounded-pill d-inline-block">
              {currentImageIndex + 1} / {currentGallery.length}
            </div>
          </div>

          <button 
            className="position-absolute end-0 m-3 btn btn-dark rounded-circle p-3 d-none d-md-block"
            onClick={nextImage}
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;