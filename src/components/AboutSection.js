'use client';
import { useEffect, useState } from 'react';
import { aboutData, profileData } from '../data/portfolioData';
import { 
  FaQuoteLeft, FaMapMarkerAlt, FaEnvelope, FaGithub, 
  FaLinkedin, FaInstagram, FaWhatsapp, FaBrain, FaExternalLinkAlt 
} from 'react-icons/fa';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Memastikan deskripsi aman dari null/undefined
  const paragraphs = aboutData?.description 
    ? aboutData.description.split('\n').filter(p => p.trim()) 
    : [];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Balige, North Sumatra, ID',
      link: null
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'jhonprimapanjaitan2022@gmail.com',
      link: 'mailto:jhonprimapanjaitan2022@gmail.com'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: '@jhonprima',
      link: 'https://github.com/jhonprima'
    }
  ];

  const socialButtons = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/jhon-prima-panjaitan-650654369/', color: '#0077b5' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/6288976716840', color: '#25D366' },
    { icon: <FaBrain />, url: 'https://huggingface.co/seccret444', color: '#FFD21E' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/pr4i.m/', color: '#E1306C' }
  ];

  return (
    <section className="mb-5" id="about">
      <style jsx>{`
        .anim-element {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .anim-active {
          opacity: 1;
          transform: translateY(0);
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(46, 204, 113, 0.15) !important;
        }
      `}</style>

      <div className="d-flex align-items-center gap-3 mb-5">
        <h2 className={`section-title text-white mb-0 anim-element ${isVisible ? 'anim-active' : ''}`}>
          About Me
        </h2>
        <div className={`flex-grow-1 bg-secondary opacity-25 anim-element ${isVisible ? 'anim-active' : ''}`} 
             style={{ height: '1px', transitionDelay: '0.1s' }}></div>
      </div>
      
      <div className="row g-5">
        
        {/* KOLOM KIRI */}
        <div className={`col-lg-4 anim-element ${isVisible ? 'anim-active' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="h-100 p-4 rounded-4 bg-dark border border-secondary border-opacity-50 hover-card position-relative overflow-hidden"
               style={{ transition: 'transform 0.3s ease' }}>
             
             <div className="position-absolute top-0 start-50 translate-middle bg-success opacity-10 rounded-circle" 
                  style={{ width: '200px', height: '200px', filter: 'blur(60px)' }}></div>

             <div className="position-relative text-center">
                <div className="d-inline-block p-1 rounded-circle mb-3" 
                     style={{ background: 'linear-gradient(45deg, #2ecc71, #3498db)' }}>
                  <img 
                    src={profileData.aboutPhoto} 
                    alt="Jhon Prima" 
                    className="rounded-circle shadow-lg object-fit-cover"
                    style={{ width: '140px', height: '140px', border: '4px solid #1a1a1a' }}
                  />
                </div>
                
                <h4 className="text-white fw-bold">{profileData.name}</h4>
                <p className="text-success small fw-semibold bg-success bg-opacity-10 px-3 py-1 rounded-pill d-inline-block border border-success border-opacity-25">
                  Available for Hire
                </p>

                <hr className="border-secondary opacity-25 my-4" />

                <div className="text-start d-flex flex-column gap-3">
                  {contactDetails.map((item, idx) => (
                    <div key={idx} className="d-flex align-items-center gap-3 p-2 rounded hover-bg-light">
                      <div className="d-flex align-items-center justify-content-center rounded-circle bg-secondary bg-opacity-25 text-success"
                           style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-muted small mb-0 text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>
                          {item.label}
                        </p>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noreferrer" 
                             className="text-white text-decoration-none fw-medium text-truncate d-block hover-text-green"
                             title={item.value}>
                             {item.value} <FaExternalLinkAlt size={10} className="ms-1 opacity-50"/>
                          </a>
                        ) : (
                          <p className="text-white mb-0 fw-medium text-truncate" title={item.value}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* KOLOM KANAN */}
        <div className={`col-lg-8 anim-element ${isVisible ? 'anim-active' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <div className="h-100 p-4 p-md-5 rounded-4 bg-dark border border-secondary border-opacity-25 position-relative shadow-lg">
             <FaQuoteLeft className="position-absolute text-success opacity-10" 
                          style={{ top: '30px', left: '30px', fontSize: '4rem' }} />
             
             <div className="position-relative" style={{ zIndex: 1 }}>
                <h3 className="text-white fw-bold mb-4">
                  {/* PERBAIKAN: Menggunakan &apos; untuk tanda kutip */}
                  Hello, I&apos;m <span className="text-success">Jhon Prima</span>
                </h3>

                <div className="text-light" style={{ lineHeight: '1.8', opacity: 0.9 }}>
                  {paragraphs.map((p, i) => (
                    <p key={i} className="mb-3">{p}</p>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-top border-secondary border-opacity-25">
                  <p className="text-muted small fw-bold mb-3 text-uppercase">Connect with me</p>
                  <div className="d-flex flex-wrap gap-3">
                    {socialButtons.map((social, idx) => (
                      <a key={idx} href={social.url} target="_blank" rel="noreferrer"
                         className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center text-white"
                         style={{ width: '50px', height: '50px', transition: 'all 0.3s' }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.background = social.color;
                           e.currentTarget.style.borderColor = social.color;
                           e.currentTarget.style.transform = 'translateY(-5px)';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.background = 'transparent';
                           e.currentTarget.style.borderColor = '#6c757d';
                           e.currentTarget.style.transform = 'translateY(0)';
                         }}>
                         {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;