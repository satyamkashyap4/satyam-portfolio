import React from 'react';
import { Award, ShieldCheck, Users, Zap, Terminal, Trophy } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'Spotlight IIITK GYMKHANA',
      role: 'Secretary',
      type: 'Leadership & Student Body',
      icon: Users,
      badgeColor: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      description: 'Serving as Secretary for Spotlight IIITK GYMKHANA, managing student activities, technical clubs, cultural events, and acting as the official representative for student initiatives at IIIT Kalyani.'
    },
    {
      title: 'Status Code 2 Hackathon',
      role: 'Organiser',
      type: 'Annual Tech Hackathon',
      icon: Zap,
      badgeColor: 'from-cyan-500 to-indigo-600',
      textColor: 'text-cyan-400',
      description: 'Organised Status Code 2, the annual flagship hackathon of IIIT Kalyani. Coordinated logistics, technical infrastructure, sponsor relations, and participant onboarding for 500+ student developers.'
    }
  ];

  return (
    <section id="achievements" className="py-24 relative bg-radial-glow border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
            <Trophy className="w-3.5 h-3.5" /> Leadership & Activities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Demonstrated commitment to student body representation, event orchestration, and collaborative teamwork.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-amber-500/30"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${item.badgeColor} text-white shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 ${item.textColor} border border-slate-800`}>
                      {item.role}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-mono">{item.type}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" /> IIIT Kalyani Verified Role
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
