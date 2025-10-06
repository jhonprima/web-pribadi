'use client';
import { useState, useEffect } from 'react';
import { aboutData } from '../data/portfolioData';
import { FaQuoteLeft } from 'react-icons/fa';

const AboutSection = () => {
  const roles = [
    "Computer Technology Student",
    "Web Developer",
    "AI Engineer",
    "Full Stack Developer",
    "Problem Solver"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[currentRole];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex < role.length) {
      const timeout = setTimeout(() => {
        setDisplayText(role.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(role.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === role.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRole((currentRole + 1) % roles.length);
    }
  }, [charIndex, isDeleting, currentRole, roles]);

  // Split description by line breaks
  const paragraphs = aboutData.description.split('\n').filter(p => p.trim());

  return (
    <section className="about-section">
      <h2 className="section-title">A little bit about me...</h2>
      
      {/* Typing Animation Card */}
      <div className="about-typing-card">
        <div className="typing-display">
          <span className="typing-text-about">{displayText}</span>
          <span className="typing-cursor-about">|</span>
        </div>
      </div>

      {/* About Content with Decorative Elements */}
      <div className="about-content-wrapper">
        <FaQuoteLeft className="quote-decoration" />
        <div className="about-content">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Decorative Lines */}
        <div className="decorative-line line-1"></div>
        <div className="decorative-line line-2"></div>
      </div>
    </section>
  );
};

export default AboutSection;