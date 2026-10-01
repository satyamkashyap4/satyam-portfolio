import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import axios from 'axios';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/api/profile');
        setProfile(res.data);
      } catch (err) {
        console.warn('API profile warning, using default resume state:', err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
      <Hero profile={profile} />

      {/* About Section */}
      <About profile={profile} />

      {/* Skills Matrix */}
      <Skills />

      {/* Projects Showcase */}
      <Projects onSelectProject={(project) => setSelectedProject(project)} />

      {/* Achievements & Leadership */}
      <Achievements />

      {/* Contact Section */}
      <Contact profile={profile} />

      {/* Footer */}
      <Footer />

      {/* Detailed Project Expansion Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
