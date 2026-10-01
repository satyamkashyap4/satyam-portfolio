import React from 'react';
import { Code2, Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-base">Satyam Babu</span>
              <span className="block text-xs text-slate-400 font-mono">Full Stack Engineer & IIIT Kalyani Student</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">#about</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">#skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">#projects</a>
            <a href="#achievements" className="hover:text-cyan-400 transition-colors">#leadership</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">#contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-2 text-xs font-mono"
            title="Scroll to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Satyam Babu. Built with MERN Stack (MongoDB, Express, React, Node.js).
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Web Excellence</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
