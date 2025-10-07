'use client';
import { useState } from 'react';
import Image from 'next/image';
import { education } from '../data/portfolioData';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar, FaTrophy, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const EducationSection = () => {
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [eduData, setEduData] = useState(education);
  // State baru untuk melacak foto mana yang sedang ditampilkan di modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fungsi untuk membuka modal dan mereset index gambar
  const openModal = (edu) => {
    setSelectedEdu(edu);
    setCurrentImageIndex(0);
  };

  // Fungsi untuk navigasi galeri (sama seperti di Portfolio)
  const navigateGallery = (direction) => {
    if (!selectedEdu || !selectedEdu.gallery) return;

    const totalImages = selectedEdu.gallery.length;
    let newIndex = currentImageIndex;

    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % totalImages;
    } else if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    }
    setCurrentImageIndex(newIndex);
  };

  // Helper untuk mendapatkan array gambar yang akan ditampilkan di carousel modal
  const currentGallerySources = selectedEdu?.gallery || [selectedEdu?.image].filter(Boolean);
  const totalImages = currentGallerySources.length;

  return (
    <section className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="section-title mb-0">Education Journey</h2>
      </div>

      <div className="row g-4">
        {eduData.map((edu) => (
          <div key={edu.id} className="col-12">
            <div className="education-card">
              <div className="education-header">
                <div className="education-icon-wrapper">
                  <FaGraduationCap size={32} />
                </div>
                <div className="flex-grow-1">
                  <h3 className="education-degree mb-2">{edu.degree}</h3>
                  <h4 className="education-school mb-2">{edu.school}</h4>
                  <div className="education-meta">
                    <span className="meta-item"><FaMapMarkerAlt size={14} /> {edu.location}</span>
                    <span className="meta-item"><FaCalendar size={14} /> {edu.year}</span>
                    {edu.status && <span className="badge badge-ongoing">{edu.status}</span>}
                  </div>
                </div>
              </div>

              {/* Tampilan Gambar Utama (Klik untuk membuka modal) */}
              {edu.image && (
                <div className="education-main-image" onClick={() => openModal(edu)}>
                  <Image
                    src={edu.image}
                    alt={edu.school}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    quality={90}
                  />
                  <div className="image-overlay">
                    <button className="btn-view-detail">
                      View Details
                    </button>
                  </div>
                </div>
              )}

              <div className="education-content">
                <p className="education-description">{edu.description}</p>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="education-achievements">
                    <h5 className="achievements-title"><FaTrophy className="me-2" /> Achievements</h5>
                    <ul className="achievements-list">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={`${achievement.substring(0, 10)}-${idx}`}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Bagian Gallery Statis */}
                <div className="education-gallery-section">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="gallery-title mb-0">Documentation Gallery</h5>
                  </div>

                  {edu.gallery && edu.gallery.length > 0 ? (
                    <div className="education-gallery">
                      {edu.gallery.map((photo, idx) => (
                        <div key={`${photo.substring(15, 25)}-${idx}`} className="gallery-item" onClick={() => openModal(edu)}>
                          <Image src={photo} alt={`Gallery ${idx + 1}`} fill sizes="100px" style={{ objectFit: 'cover' }} quality={90} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="gallery-empty">
                      <p>No documentation photos available.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal dengan Carousel */}
      {selectedEdu && (
        <div className="custom-modal modal-visible" onClick={() => setSelectedEdu(null)}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h4 className="mb-1">{selectedEdu.degree}</h4>
                <p className="text-muted mb-0">{selectedEdu.school}</p>
              </div>
              <button className="btn-close-custom" onClick={() => setSelectedEdu(null)}><FaTimes /></button>
            </div>
            <div className="modal-body">
              
              {/* --- CAROUSEL GALERI UTAMA --- */}
              <div className="education-detail-image mb-4">
                <div 
                  className="image-carousel-container" 
                  style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}
                >
                  {/* FIX UTAMA: Map semua gambar dan gunakan opacity/position untuk switching mulus */}
                  {currentGallerySources.map((src, index) => (
                    <div 
                      key={index} 
                      // Menetapkan posisi absolut dan transisi opacity
                      style={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          // FIX: Gunakan opacity untuk hanya menampilkan gambar yang aktif
                          opacity: index === currentImageIndex ? 1 : 0, 
                          transition: 'opacity 0.4s ease-in-out',
                          // Tambahkan z-index agar gambar yang aktif di depan
                          zIndex: index === currentImageIndex ? 2 : 1,
                      }}
                    >
                      <Image 
                        src={src} 
                        alt={`${selectedEdu.school} documentation ${index + 1}`} 
                        fill 
                        sizes="100vw"
                        // FIX: Memastikan object-fit: cover agar gambar mengisi penuh tanpa space
                        style={{ objectFit: 'cover' }} 
                        quality={90}
                      />
                    </div>
                  ))}

                  {/* Tombol Navigasi (Hanya muncul jika ada lebih dari 1 gambar) */}
                  {totalImages > 1 && (
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
                        style={{ right: '10px' }} 
                      >
                        <FaChevronRight size={20} />
                      </button>
                      {/* Indikator halaman */}
                      <div className="carousel-indicator">
                        {currentImageIndex + 1} / {totalImages}
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* --- AKHIR CAROUSEL --- */}
              
              <div className="education-meta mb-4">
                <span className="meta-item"><FaMapMarkerAlt size={16} /> {selectedEdu.location}</span>
                <span className="meta-item"><FaCalendar size={16} /> {selectedEdu.year}</span>
              </div>

              <p className="text-muted mb-4">{selectedEdu.description}</p>

              {selectedEdu.achievements && (
                <div className="mb-4">
                  <h5 className="text-green mb-3"><FaTrophy className="me-2" /> Achievements</h5>
                  <ul className="achievements-list-modal">
                    {selectedEdu.achievements.map((achievement, idx) => (
                      <li key={`${achievement.substring(0, 10)}-${idx}`}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tampilan Thumbnails Galeri (Klik untuk mengganti foto) */}
              {selectedEdu.gallery && selectedEdu.gallery.length > 0 && (
                <div>
                  <h5 className="text-green mb-3">Photo Gallery Thumbnails</h5>
                  <div className="modal-gallery">
                    {selectedEdu.gallery.map((photo, idx) => (
                      <div 
                        key={`${photo.substring(15, 25)}-${idx}`} 
                        className="modal-gallery-item cursor-pointer"
                        onClick={() => setCurrentImageIndex(idx)} // Klik thumbnail untuk ganti foto
                      >
                        <Image 
                          src={photo} 
                          alt={`Gallery ${idx + 1}`} 
                          fill 
                          sizes="150px" 
                          style={{ objectFit: 'cover', opacity: idx === currentImageIndex ? 1 : 0.6 }} 
                          quality={90} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EducationSection;
