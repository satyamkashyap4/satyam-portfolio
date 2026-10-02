import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Github, Linkedin, Mail, Sparkles, FileText } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const resumeUrl = "https://drive.google.com/file/d/1C2-GgLrfYBFV6CsNIvDqX3mYvzYR7Qku/view?pli=1";

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-panel py-3 shadow-2xl shadow-cyan-950/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Satyam Babu
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                IIIT Kalyani '26
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.name.toLowerCase()
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/satyamkashyap4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/satyambabu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Resume Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-full hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveSection(link.name.toLowerCase());
                setMobileMenuOpen(false);
              }}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-semibold text-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-around">
            <a href="https://github.com/satyamkashyap4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="https://linkedin.com/in/satyambabu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href="mailto:isattu8@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400">
              <Mail className="w-5 h-5" /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
