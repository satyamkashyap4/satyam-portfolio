import React from 'react';
import { GraduationCap, User, MapPin, Award, BookOpen, Languages, Sparkles } from 'lucide-react';

export default function About({ profile }) {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <User className="w-3.5 h-3.5" /> Background & Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Satyam Babu</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A passionate computer science undergrad driven by crafting scalable web applications and combining AI tools with full-stack software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Personal Bio & Core Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed font-light">
                {profile?.bio || `Web Developer with a focus on building impactful digital solutions, eager to tackle dynamic challenges and apply creativity to craft seamless, high-performing web applications.`}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Location</div>
                    <div className="text-sm font-semibold text-white">Madhubani, Bihar, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">University</div>
                    <div className="text-sm font-semibold text-white">IIIT Kalyani (2022–26)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages & Soft Skills Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Languages Known */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <Languages className="w-4 h-4" /> Languages Spoken
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {profile?.languages?.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                      {lang}
                    </span>
                  )) || ['Hindi', 'English', 'Maithili'].map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Award className="w-4 h-4" /> Core Qualities
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Leadership', 'Team Collaboration', 'Problem Solving', 'Creativity'].map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-cyan-950/40 text-cyan-300 text-xs font-medium border border-cyan-800/40">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-6">
            <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" /> Academic Journey
              </h3>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-slate-800">
                
                {/* Education Item 1: IIIT Kalyani */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-md group-hover:scale-125 transition-transform"></div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                        2022 – 2026
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white pt-1">
                      Indian Institute of Information Technology, Kalyani
                    </h4>
                    <p className="text-sm font-medium text-cyan-300">
                      B.Tech in Computer Science and Engineering
                    </p>
                    <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                      Rigorous coursework in Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering.
                    </p>
                  </div>
                </div>

                {/* Education Item 2: Class XII */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 shadow-md group-hover:scale-125 transition-transform"></div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-md bg-indigo-950 text-indigo-400 border border-indigo-800/50">
                        2021
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white pt-1">
                      Sanskar Bharti Global School, Madhubani
                    </h4>
                    <p className="text-sm text-slate-300">
                      Class XII (Intermediate) — CBSE Board
                    </p>
                  </div>
                </div>

                {/* Education Item 3: Class X */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950 shadow-md group-hover:scale-125 transition-transform"></div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                        2019
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white pt-1">
                      Sanskar Bharti Global School, Madhubani
                    </h4>
                    <p className="text-sm text-slate-300">
                      Class X (Matriculation) — CBSE Board
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
