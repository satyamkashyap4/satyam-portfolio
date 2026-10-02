import React, { useState } from 'react';
import { ArrowRight, Download, Terminal, CheckCircle2, Code, Cpu, Database, Server, FileText } from 'lucide-react';

export default function Hero({ profile }) {
  const [activeTab, setActiveTab] = useState('developer');

  const resumeUrl = "https://drive.google.com/file/d/1C2-GgLrfYBFV6CsNIvDqX3mYvzYR7Qku/view?pli=1";

  const codeSnippets = {
    developer: `// Satyam Babu Profile Configuration
const developer = {
  name: "Satyam Babu",
  college: "IIIT Kalyani (B.Tech CSE '26)",
  location: "Madhubani, Bihar, India",
  contact: "isattu8@gmail.com",
  stack: ["MongoDB", "Express", "React", "Node.js", "Python"],
  status: "Available for Full-Stack & Engineering Roles",
  solveProblem: function(input) {
    return this.stack.reduce((solution, tech) => {
      return solution.optimizeWith(tech);
    }, new CleanArchitecture(input));
  }
};`,
    mern: `// MERN Stack REST Controller
import express from 'express';
import { DiseaseModel } from './models/AIInference.js';

const router = express.Router();

router.post('/api/predict', async (req, res) => {
  const { parameters } = req.body;
  const result = await DiseaseModel.explainWithSHAP(parameters);
  res.json({
    status: "Success",
    confidence: "98.4%",
    insights: result.limeAnalysis
  });
});`,
  };

  return (
    <section className="relative min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center bg-radial-glow overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Seeking Full-Stack & Software Engineering Roles
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Crafting Scalable <span className="gradient-text">MERN Stack</span> Apps & <span className="gradient-text-alt">AI Solutions</span>
            </h1>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              Hi, I'm <strong className="text-white font-semibold">Satyam Babu</strong>, a Computer Science Student at <span className="text-cyan-400 font-medium">IIIT Kalyani</span>. I specialize in building robust full-stack applications with React, Node.js, Express, MongoDB, and integrating Explainable AI models.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="tech-badge"><Database className="w-3.5 h-3.5" /> MongoDB</span>
              <span className="tech-badge"><Server className="w-3.5 h-3.5" /> Express.js</span>
              <span className="tech-badge"><Code className="w-3.5 h-3.5" /> React.js</span>
              <span className="tech-badge"><Server className="w-3.5 h-3.5" /> Node.js</span>
              <span className="tech-badge"><Cpu className="w-3.5 h-3.5" /> Python / AI</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 sm:bg-transparent sm:border-none">
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono">3+</div>
                <div className="text-xs text-slate-400 font-medium">Core Production Projects</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 sm:bg-transparent sm:border-none">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono">IIIT Kalyani</div>
                <div className="text-xs text-slate-400 font-medium">B.Tech CSE (2022-26)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 sm:bg-transparent sm:border-none">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-400 font-mono">Leadership</div>
                <div className="text-xs text-slate-400 font-medium">Spotlight GYMKHANA</div>
              </div>
            </div>

          </div>

          {/* Right Code Interactive Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/40 border border-slate-700/60 shimmer-effect w-full">
              
              {/* Terminal Header */}
              <div className="bg-slate-900/90 px-3 sm:px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-1 text-[11px] sm:text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> satyam@iiitk
                  </span>
                </div>
                
                {/* Tab selector */}
                <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('developer')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'developer' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    profile.js
                  </button>
                  <button
                    onClick={() => setActiveTab('mern')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'mern' ? 'bg-indigo-500/20 text-indigo-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    api.js
                  </button>
                </div>
              </div>

              {/* Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-slate-300 bg-slate-950/90 overflow-x-auto min-h-[260px] sm:min-h-[280px]">
                <pre className="leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="bg-slate-900/90 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 text-[11px] sm:text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Built with MERN Stack
                </span>
                <span className="text-[11px] sm:text-xs">Node v20.x</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
