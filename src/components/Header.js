'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image'; // IMPROVEMENT: Mengimpor komponen Image
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaUser } from 'react-icons/fa';
import { profileData } from '../data/portfolioData';

// FIX: 'roles' dipindahkan ke luar komponen agar tidak dibuat ulang pada setiap render.
const roles = [
  "Web Developer",
  "AI Engineer",
  "Database Administrator",
  "Full Stack Developer"
];

const Header = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    let timeout;

    if (!isDeleting && charIndex < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole]);

  return (
    <div className="header-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <div className="d-flex align-items-center gap-2 mb-3 header-greeting">
              <FaUser size={20} />
              <span>{profileData.tagline}</span>
            </div>
            
            <h1 className="header-name mb-3">
              I&apos;m <span className="text-green">{profileData.name}</span>!
            </h1>
            
            <div className="typing-container mb-4">
              <span className="typing-text">{displayText}</span>
              <span className="typing-cursor">|</span>
            </div>
            
            <div className="d-flex flex-wrap gap-4 header-info">
              <div className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt size={16} />
                <span>{profileData.location}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaEnvelope size={16} />
                <span>{profileData.email}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaGithub size={16} />
                <span>{profileData.github}</span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-5">
            <div className="header-photo-display">
              {profileData.aboutPhoto && (
                <Image
                  src={profileData.aboutPhoto}
                  alt={profileData.name}
                  width={400} 
                  height={400}
                  quality={95}
                  priority
                  // FIX UTAMA: Hapus inline style yang menyebabkan bentuk lingkaran
                  // dan ganti height: 'auto' menjadi '100%' untuk mengisi penuh.
                  style={{ 
                    width: '100%', 
                    height: '100%', // Mengisi penuh container
                    objectFit: 'cover' // Memastikan gambar mengisi penuh tanpa space
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
