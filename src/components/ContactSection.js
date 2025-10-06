'use client';
import { useState } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaWhatsapp, FaEnvelope, FaExternalLinkAlt, FaCopy, FaCheck } from 'react-icons/fa';
import { contactData } from '../data/portfolioData';

const ContactSection = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const getIcon = (iconName) => {
    const icons = {
      linkedin: FaLinkedin,
      instagram: FaInstagram,
      facebook: FaFacebook,
      tiktok: FaTiktok,
      twitter: FaTwitter,
      whatsapp: FaWhatsapp,
      email: FaEnvelope
    };
    return icons[iconName] || FaEnvelope;
  };

  const handleCopy = (text, name) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(name);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section className="mb-5">
      {/* Quote Section */}
      <div className="quote-section mb-5">
        <div className="quote-mark">"</div>
        <h2 className="quote-text">{contactData.quote}</h2>
        <p className="quote-author">- {contactData.quoteAuthor}</p>
      </div>

      <h2 className="section-title">Let's Connect!</h2>
      <p className="text-muted mb-5" style={{ fontSize: '1.1rem' }}>
        Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      {/* Social Media Grid */}
      <div className="row g-4">
        {contactData.socialMedia.map((social, index) => {
          const Icon = getIcon(social.icon);
          return (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="social-card" style={{ '--social-color': social.color }}>
                <div className="social-header">
                  <div className="social-icon-wrapper">
                    <Icon size={32} />
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="mb-1">{social.name}</h4>
                    <p className="text-muted mb-0 small">{social.description}</p>
                  </div>
                </div>
                
                <div className="social-username">
                  <span>{social.username}</span>
                </div>

                <div className="social-actions">
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-social btn-visit"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Visit</span>
                  </a>
                  <button 
                    className="btn-social btn-copy"
                    onClick={() => handleCopy(social.username, social.name)}
                  >
                    {copiedItem === social.name ? (
                      <>
                        <FaCheck size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Form */}
      <div className="contact-form-section mt-5">
        <h3 className="mb-4 text-center">Or send me a message</h3>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className="contact-form">
              <div className="row g-3">
                <div className="col-md-6">
                  <input 
                    type="text" 
                    className="form-control custom-input" 
                    placeholder="Your Name *" 
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="email" 
                    className="form-control custom-input" 
                    placeholder="Your Email *" 
                    required 
                  />
                </div>
                <div className="col-12">
                  <input 
                    type="text" 
                    className="form-control custom-input" 
                    placeholder="Subject *" 
                    required 
                  />
                </div>
                <div className="col-12">
                  <textarea 
                    className="form-control custom-input" 
                    rows="5" 
                    placeholder="Your Message *" 
                    required
                  />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-success btn-lg px-5">
                    <FaEnvelope className="me-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;