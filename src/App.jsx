import React, { useState, useEffect } from 'react';
import HeroSection from './components/ui/Hero';
import Experience from './components/ui/Experience';
import Knowlegde from './components/ui/Knowlegde';
import Projects from './components/ui/Projects';
import Contact from './components/ui/Contact';
import Footer from './components/ui/Footer';
import NavigatorComponent from './components/ui/NavigatorComponent';
import StarCanvas from './canvas/Stars.jsx';
import { projects } from './constants/index.js';
import './styles/theme.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState('all');
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);

      const skillsSection = document.getElementById('skills');
      if (skillsSection && !skillsVisible) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setSkillsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [skillsVisible]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen font-sans antialiased selection:bg-indigo-500/30 selection:text-white transition-colors duration-300 flex flex-col">

      {/* Capa de partículas de fondo */}
      <StarCanvas />

      {/* Cabecera de control global */}
      <NavigatorComponent changeTheme={changeTheme} theme={theme} />

      {/* Flujo secuencial de secciones independientes */}
      <div className="relative z-10 flex flex-col w-full">

        <HeroSection />

        <Experience />

        <Knowlegde skillsVisible={skillsVisible} />

        <Projects
          projectFilter={projectFilter}
          setProjectFilter={setProjectFilter}
          filteredProjects={filteredProjects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />

        {/* <Contact /> */}

        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;