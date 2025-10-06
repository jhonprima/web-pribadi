'use client';
import { useState } from 'react';
import Image from 'next/image';
import { education } from '../data/portfolioData';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar, FaTrophy, FaUpload, FaTimes, FaPlus, FaTrash } from 'react-icons/fa';

const EducationSection = () => {
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [eduData, setEduData] = useState(education);

  const handleAddPhoto = (e, eduId) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEduData(eduData.map(edu => {
          if (edu.id === eduId) {
            return {
              ...edu,
              gallery: [...(edu.gallery || []), reader.result]
            };
          }
          return edu;
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = (eduId, photoIndex) => {
    setEduData(eduData.map(edu => {
      if (edu.id === eduId) {
        return {
          ...edu,
          gallery: edu.gallery.filter((_, idx) => idx !== photoIndex)
        };
      }
      return edu;
    }));
  };

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

              {edu.image && (
                <div className="education-main-image">
                  <Image
                    src={edu.image}
                    alt={edu.school}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    quality={90} // FIX: Meningkatkan kualitas visual gambar
                  />
                  <div className="image-overlay">
                    <button className="btn-view-detail" onClick={() => setSelectedEdu(edu)}>
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

                <div className="education-gallery-section">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="gallery-title mb-0">Documentation Gallery</h5>
                    <label className="btn-add-photo">
                      <input type="file" accept="image/*" onChange={(e) => handleAddPhoto(e, edu.id)} style={{ display: 'none' }} />
                      <FaPlus size={14} /> <span>Add Photo</span>
                    </label>
                  </div>

                  {edu.gallery && edu.gallery.length > 0 ? (
                    <div className="education-gallery">
                      {edu.gallery.map((photo, idx) => (
                        <div key={`${photo.substring(15, 25)}-${idx}`} className="gallery-item">
                          <Image src={photo} alt={`Gallery ${idx + 1}`} fill sizes="100px" style={{ objectFit: 'cover' }} quality={90} />
                          <button className="btn-delete-photo" onClick={() => handleDeletePhoto(edu.id, idx)}>
                            <FaTrash size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="gallery-empty">
                      <FaUpload size={32} className="mb-2" />
                      <p>No photos yet. Click &quot;Add Photo&quot; to upload documentation.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
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
              {selectedEdu.image && (
                // FIX: Memberi style pada div pembungkus agar layout modal tidak rusak
                <div 
                  className="education-detail-image mb-4"
                  style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}
                >
                  <Image 
                    src={selectedEdu.image} 
                    alt={selectedEdu.school} 
                    fill 
                    sizes="100vw" 
                    style={{ objectFit: 'cover' }}
                    quality={90} // FIX: Meningkatkan kualitas visual
                  />
                </div>
              )}
              
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

              {selectedEdu.gallery && selectedEdu.gallery.length > 0 && (
                <div>
                  <h5 className="text-green mb-3">Photo Gallery</h5>
                  <div className="modal-gallery">
                    {selectedEdu.gallery.map((photo, idx) => (
                      <div key={`${photo.substring(15, 25)}-${idx}`} className="modal-gallery-item">
                        <Image src={photo} alt={`Gallery ${idx + 1}`} fill sizes="150px" style={{ objectFit: 'cover' }} quality={90} />
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