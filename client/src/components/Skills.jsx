import React, { useState } from 'react';
import { Cpu, Code, Database, Terminal, CheckCircle, Layers } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'C / C++', level: 85, exp: 'Advanced Problem Solving' },
        { name: 'Python', level: 90, exp: 'ML, OpenCV, Flask, Data Processing' },
        { name: 'JavaScript (ES6+)', level: 88, exp: 'Asynchronous JS, React, Node.js' },
        { name: 'Java', level: 78, exp: 'OOP Concepts & Algorithms' },
        { name: 'HTML5 & CSS3', level: 92, exp: 'Semantic Layouts, Responsive Design' },
      ]
    },
    {
      title: 'Full Stack & Web Technologies',
      icon: Database,
      color: 'from-indigo-500 to-purple-600',
      skills: [
        { name: 'React.js', level: 88, exp: 'State Management, Hooks, Custom UI' },
        { name: 'Node.js & Express.js', level: 85, exp: 'REST APIs, Middleware, Auth' },
        { name: 'MongoDB & Mongoose', level: 82, exp: 'Document Schemas & Aggregations' },
        { name: 'Flask', level: 84, exp: 'Microservices & AI Model Integrations' },
        { name: 'Tailwind CSS & Bootstrap', level: 90, exp: 'Modern Glassmorphism & Micro-animations' },
        { name: 'SQL & Relational DBs', level: 80, exp: 'Query Optimization & Schema Design' },
      ]
    },
    {
      title: 'AI, Machine Learning & Vision',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'OpenCV & Computer Vision', level: 85, exp: 'Image Processing & Edge Detection' },
        { name: 'Scikit-Learn & ML Models', level: 84, exp: 'Classification & Regression Pipeline' },
        { name: 'SHAP & LIME (Explainable AI)', level: 88, exp: 'Feature Importance & Model Interpretation' },
        { name: 'BERT & NLP Techniques', level: 82, exp: 'Text Embeddings & ATS Parsing' },
        { name: 'NumPy & Pandas', level: 88, exp: 'Matrix Math & Data Preprocessing' },
        { name: 'Streamlit', level: 86, exp: 'Rapid Prototyping for Data & AI Tools' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-radial-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" /> Technical Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Hands-on proficiency across full-stack web development, software engineering fundamentals, and applied machine learning tools.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300">
                
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${cat.color} p-2 text-white shadow-lg shadow-cyan-500/10 flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="font-mono text-cyan-400 font-bold">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>

                        <div className="text-[11px] text-slate-400 font-light truncate">
                          {skill.exp}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Badge */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Resume Competencies</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
