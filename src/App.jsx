import React, { useState, useEffect } from 'react';
import { getPortfolioData } from './data/dataService';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsMatrixSection from './components/SkillsMatrixSection';
import AboutEducationSection from './components/AboutEducationSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const portfolioData = getPortfolioData();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Instant Zero-Flash Theme Toggle Handler
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Section Observer for 3D Avatar & Nav Highlighting
  useEffect(() => {
    const sections = ['hero', 'projects', 'skills', 'about'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* 1. Spatial Cyber Depth Field Canvas */}
      <BackgroundCanvas />

      {/* 2. Top Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* 3. Main Showcase Sections */}
      <main>
        {/* Overview / Hero */}
        <HeroSection
          profileData={portfolioData.profile}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* Projects Section (3 Projects) */}
        <ProjectsSection projects={portfolioData.projects} />

        {/* Skill Matrices (Core Stack | Comfortable With | Exploring) */}
        <SkillsMatrixSection skillsGrouped={portfolioData.skillsGrouped} />

        {/* About Me & Education */}
        <AboutEducationSection
          profileData={portfolioData.profile}
          educationData={portfolioData.education}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
      </main>

      {/* 4. Footer & Contact */}
      <Footer
        profileData={portfolioData.profile}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* 5. Resume View/Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profileData={portfolioData.profile}
      />
    </div>
  );
}
