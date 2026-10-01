import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Layers, Search, Sparkles, Filter, Code2, ArrowUpRight, Cpu, Video, Activity, FileText } from 'lucide-react';
import axios from 'axios';

export default function Projects({ onSelectProject }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (err) {
        console.warn('API error, using initial client fallback dataset:', err);
        // Fallback projects if server is not reachable
        setProjects([
          {
            _id: "p1",
            title: "Disease Prediction System",
            slug: "disease-prediction-system",
            subtitle: "Medical Diagnostics platform with Explainable AI transparency",
            category: "AI/ML",
            date: "May 2026",
            summary: "Predicts multiple medical conditions based on clinical health parameters using trained ML models, featuring SHAP & LIME explainability.",
            description: "Developed a comprehensive Disease Prediction System that assists healthcare scholars and clinical researchers in diagnosing multiple medical conditions based on patient biometric parameters. To build trust in AI recommendations, the platform integrates Explainable AI (XAI) frameworks (SHAP and LIME) to illustrate feature importance and decision rationale.",
            technologies: ["Python", "Scikit-learn", "Streamlit", "SHAP", "LIME", "Pandas"],
            features: [
              "Multi-disease classification models trained on clinical datasets",
              "Interactive Streamlit web interface with immediate parameter sliders",
              "SHAP waterfall plots showing individual feature contributions",
              "LIME localized model explanations for medical transparency"
            ],
            architecture: ["Streamlit Frontend", "Scikit-Learn Inference Pipeline", "SHAP / LIME Generator"],
            liveDemoUrl: "https://disease-prediction-demo.example.com",
            githubUrl: "https://github.com/satyambabu/disease-prediction-system",
            featured: true,
            iconName: "Activity",
            colorGradient: "from-emerald-500 to-teal-600"
          },
          {
            _id: "p2",
            title: "AI - Resume Analyzer",
            slug: "ai-resume-analyzer",
            subtitle: "ATS-style candidate matching & skill gap insight generator",
            category: "AI/ML",
            date: "January 2026",
            summary: "Matches candidate resumes with target job descriptions using BERT embeddings and NLP techniques to deliver match scores and actionable skill insights.",
            description: "Built an intelligent web platform that parses resume documents and job descriptions, extracting key entities and semantic embeddings via BERT models. The application calculates precise ATS match percentages, identifies missing keywords or technical skills, and provides personalized recommendations for job seekers.",
            technologies: ["Python", "Flask", "BERT", "NLP", "Transformers", "JavaScript"],
            features: [
              "BERT semantic vector similarity calculation between resumes and requirements",
              "ATS compatibility scoring dashboard with visual metric meters",
              "Skill gap detection highlights critical missing technologies",
              "Flask REST backend serving real-time NLP inference"
            ],
            architecture: ["Flask Microframework Backend", "BERT / HuggingFace Model", "Spacy Text Normalizer"],
            liveDemoUrl: "https://resume-analyzer-demo.example.com",
            githubUrl: "https://github.com/satyambabu/ai-resume-analyzer",
            featured: true,
            iconName: "FileText",
            colorGradient: "from-indigo-500 to-purple-600"
          },
          {
            _id: "p3",
            title: "Lane Detection Web Application",
            slug: "lane-detection-web-app",
            subtitle: "Real-time computer vision system for road safety",
            category: "Computer Vision",
            date: "September 2024",
            summary: "Real-time computer vision web app using OpenCV and Flask to detect highway lane boundaries and alert departure warnings on video/image streams.",
            description: "Full-stack computer vision application engineered to process vehicle camera video feeds and images, detecting lane lines using Canny edge detection, Region of Interest (ROI) masking, and Hough Transform algorithms. The web dashboard displays annotated video output with instantaneous lane departure alerts.",
            technologies: ["Python", "OpenCV", "NumPy", "Flask", "JavaScript", "HTML5"],
            features: [
              "Real-time video frame processing for lane boundary line identification",
              "Canny edge detection and Hough Transform algorithm pipeline",
              "Visual and audio lane departure warning notifications",
              "Flask API streaming processed video buffer back to web client"
            ],
            architecture: ["OpenCV Computer Vision Engine", "NumPy Matrix Ops", "Flask Streaming Backend"],
            liveDemoUrl: "https://lane-detection-demo.example.com",
            githubUrl: "https://github.com/satyambabu/lane-detection-app",
            featured: true,
            iconName: "Video",
            colorGradient: "from-cyan-500 to-blue-600"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = ['All', 'AI/ML', 'Computer Vision'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-indigo-400" />;
      case 'Video': return <Video className="w-6 h-6 text-cyan-400" />;
      default: return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" /> Project Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Software Projects</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Exploration of software engineering builds spanning Explainable AI, Natural Language Processing, and Computer Vision web applications.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl glass-input text-xs"
            />
          </div>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="py-20 text-center text-slate-400 flex items-center justify-center gap-3">
            <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            <span>Loading projects dataset...</span>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project._id || project.slug}
                className="glass-card rounded-2xl p-6 border border-slate-800/90 flex flex-col justify-between group hover:border-cyan-500/40"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                        {getProjectIcon(project.iconName)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                          {project.category}
                        </span>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">{project.date}</div>
                      </div>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-300 mb-3">{project.subtitle}</p>
                  <p className="text-slate-300 text-xs leading-relaxed font-light mb-6">
                    {project.summary}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
