'use client';
import { FaUser, FaGraduationCap, FaCode, FaBriefcase, FaFolderOpen, FaTrophy, FaRss, FaEnvelope } from 'react-icons/fa';
import MusicPlayer from './MusicPlayer';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'about', icon: FaUser, label: 'About me' },
    { id: 'education', icon: FaGraduationCap, label: 'Education' },
    { id: 'skills', icon: FaCode, label: 'Skills' },
    { id: 'experience', icon: FaBriefcase, label: 'Experience' },
    { id: 'portfolio', icon: FaFolderOpen, label: 'Portfolio' },
    { id: 'achievements', icon: FaTrophy, label: 'Achievements' },
    { id: 'updates', icon: FaRss, label: 'Updates' },
    { id: 'contact', icon: FaEnvelope, label: 'Contact' },
  ];

  return (
    <div className="sidebar">
      {/* Profile Section - More Compact */}
      <div className="profile-section">
        <div className="profile-img-small">
          <FaUser size={32} color="#fff" />
          <div className="status-indicator-small"></div>
        </div>
        <div className="profile-name">
          <span className="name-first">Jhon</span>
          <span className="name-last">Prima</span>
        </div>
      </div>

      {/* Music Player - Compact */}
      <div className="music-section">
        <MusicPlayer />
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;