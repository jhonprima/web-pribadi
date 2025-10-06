'use client';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import TestimonialSection from '../components/TestimonialSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import PortfolioSection from '../components/PortfolioSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return (
          <>
            <Header />
            <AboutSection />
          </>
        );
      case 'education':
        return <EducationSection />;
      case 'skills':
        return <SkillsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'portfolio':
        return <PortfolioSection />;
     case 'achievements':
  return <AchievementsSection />;
      case 'updates':
        return (
          <section>
            <h2 className="section-title">Updates</h2>
            <p className="text-muted">Coming soon...</p>
          </section>
        );
     case 'contact':
  return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="d-flex">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <div className="container-fluid">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}