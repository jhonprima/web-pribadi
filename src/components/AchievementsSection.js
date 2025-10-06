'use client';
import { useState } from 'react';
import { FaTrophy, FaUpload, FaAward, FaCalendar, FaTimes, FaCertificate } from 'react-icons/fa';
import { certificates as initialCertificates } from '../data/portfolioData';

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState(initialCertificates);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [newCert, setNewCert] = useState({
    title: '',
    issuer: '',
    date: '',
    description: '',
    image: null
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCert({ ...newCert, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCertificate = () => {
    if (newCert.title && newCert.issuer && newCert.date) {
      const certificate = {
        id: Date.now(),
        ...newCert,
        image: newCert.image || null
      };
      setAchievements([certificate, ...achievements]);
      setNewCert({ title: '', issuer: '', date: '', description: '', image: null });
      setShowUploadModal(false);
    }
  };

  const handleDeleteCert = (id) => {
    setAchievements(achievements.filter(cert => cert.id !== id));
    setSelectedCert(null);
  };

  return (
    <section className="achievements-section">
      {/* Header with floating icons */}
      <div className="achievements-header">
        <div className="floating-icons">
          <FaTrophy className="float-icon icon-1" />
          <FaCertificate className="float-icon icon-2" />
          <FaAward className="float-icon icon-3" />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title mb-0">Achievements & Certificates</h2>
          <button 
            className="btn btn-success d-flex align-items-center gap-2 pulse-button"
            onClick={() => setShowUploadModal(true)}
          >
            <FaUpload /> Add Certificate
          </button>
        </div>
      </div>

      {/* Certificates Grid with Animation */}
      <div className="row g-4">
        {achievements.map((cert, index) => (
          <div 
            key={cert.id} 
            className="col-md-6 col-lg-4 col-xl-3"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div 
              className="certificate-card-animated"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="certificate-badge">
                <FaCertificate size={20} />
              </div>
              <div className="certificate-image-wrapper">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} />
                ) : (
                  <div className="certificate-placeholder-new">
                    <FaAward size={64} className="placeholder-icon" />
                    <p className="mt-2">Certificate Preview</p>
                  </div>
                )}
                <div className="certificate-overlay">
                  <span className="view-badge">View Details</span>
                </div>
              </div>
              <div className="certificate-content-new">
                <h5 className="cert-title">{cert.title}</h5>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-date">
                  <FaCalendar size={12} />
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="custom-modal modal-visible fade-in" onClick={() => setShowUploadModal(false)}>
          <div className="modal-content slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="mb-0">Add New Certificate</h4>
              <button 
                className="btn-close-custom"
                onClick={() => setShowUploadModal(false)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label text-white">Certificate Title *</label>
                <input
                  type="text"
                  className="form-control custom-input"
                  value={newCert.title}
                  onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                  placeholder="e.g., AWS Certified Developer"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Issuing Organization *</label>
                <input
                  type="text"
                  className="form-control custom-input"
                  value={newCert.issuer}
                  onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                  placeholder="e.g., Amazon Web Services"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Date *</label>
                <input
                  type="text"
                  className="form-control custom-input"
                  value={newCert.date}
                  onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                  placeholder="e.g., December 2023"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Description</label>
                <textarea
                  className="form-control custom-input"
                  rows="3"
                  value={newCert.description}
                  onChange={(e) => setNewCert({ ...newCert, description: e.target.value })}
                  placeholder="Brief description of the achievement..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Certificate Image</label>
                <div className="upload-area">
                  <input
                    type="file"
                    id="certUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="certUpload" className="upload-label">
                    {newCert.image ? (
                      <img src={newCert.image} alt="Preview" className="upload-preview" />
                    ) : (
                      <>
                        <FaUpload size={32} className="text-green mb-2" />
                        <p className="mb-0">Click to upload certificate image</p>
                      </>
                    )}
                  </label>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-success flex-grow-1"
                  onClick={handleAddCertificate}
                >
                  Add Certificate
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowUploadModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedCert && (
        <div className="custom-modal modal-visible fade-in" onClick={() => setSelectedCert(null)}>
          <div className="modal-content modal-large slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="mb-0">{selectedCert.title}</h4>
              <button 
                className="btn-close-custom"
                onClick={() => setSelectedCert(null)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <div className="certificate-detail-image mb-4">
                {selectedCert.image ? (
                  <img src={selectedCert.image} alt={selectedCert.title} />
                ) : (
                  <div className="certificate-placeholder-large">
                    <FaAward size={120} className="text-green" />
                  </div>
                )}
              </div>
              <h5 className="text-green mb-2">{selectedCert.issuer}</h5>
              <div className="d-flex align-items-center gap-2 text-muted mb-3">
                <FaCalendar />
                <span>{selectedCert.date}</span>
              </div>
              {selectedCert.description && (
                <p className="text-muted">{selectedCert.description}</p>
              )}
              <button 
                className="btn btn-danger mt-3"
                onClick={() => handleDeleteCert(selectedCert.id)}
              >
                Delete Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;