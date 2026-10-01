const mongoose = require('mongoose');

// In-memory fallback dataset initialized directly from Satyam Babu's CV
const initialProfile = {
  name: "Satyam Babu",
  headline: "Web Developer | Full Stack & AI Integrations",
  bio: "Web Developer with a focus on building impactful digital solutions, eager to tackle dynamic challenges and apply creativity to craft seamless, high-performing web applications. Demonstrated proficiency in full-stack development, problem-solving with a user-first mindset, and effective collaboration across multidisciplinary teams. Skilled in leveraging modern frameworks, cutting-edge tools, and best practices to optimize performance and elevate overall user satisfaction.",
  location: "Madhubani, Bihar, India",
  email: "isattu8@gmail.com",
  phone: "+91-6205617146",
  socialLinks: {
    linkedin: "https://linkedin.com/in/satyambabu",
    github: "https://github.com/satyamkashyap4"
  },
  education: [
    {
      institution: "Indian Institute of Information Technology, Kalyani (IIIT Kalyani)",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2022 – 2026",
      highlights: [
        "Specializing in Computer Science & Full-Stack Systems",
        "Active leader in Gymkhana Student Body and Tech events"
      ]
    },
    {
      institution: "Sanskar Bharti Global School, Madhubani (CBSE Board)",
      degree: "Class XII (Intermediate)",
      period: "2021",
      highlights: ["Science Stream (Physics, Chemistry, Mathematics)"]
    },
    {
      institution: "Sanskar Bharti Global School, Madhubani (CBSE Board)",
      degree: "Class X (Matriculation)",
      period: "2019",
      highlights: ["High Distinction in Science and Mathematics"]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "Java", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Full Stack & Web",
      items: ["React", "Node.js", "Express", "MongoDB", "Flask", "Bootstrap", "Tailwind CSS", "SQL", "Streamlit"]
    },
    {
      category: "AI & Data Science",
      items: ["OpenCV", "NumPy", "Pandas", "Scikit-learn", "SHAP", "LIME", "BERT", "NLP"]
    },
    {
      category: "Soft Skills",
      items: ["Leadership", "Team Collaboration", "Problem Solving", "Creativity", "Technical Communication"]
    }
  ],
  achievements: [
    {
      title: "Student Gymkhana Leadership",
      role: "Secretary",
      organization: "Spotlight IIITK GYMKHANA",
      description: "Spearheaded cultural & tech activities, coordinated multi-tier student events, and represented student initiatives."
    },
    {
      title: "Annual College Hackathon Organiser",
      role: "Organiser",
      organization: "Status Code 2",
      description: "Successfully organized Status Code 2 annual hackathon, managing logistics, platform ops, and mentoring participant teams."
    }
  ],
  languages: ["Hindi", "English", "Maithili"]
};

const initialProjects = [
  {
    _id: "p1",
    title: "Disease Prediction System",
    slug: "disease-prediction-system",
    subtitle: "Medical Diagnostics platform with Explainable AI transparency",
    category: "AI/ML",
    date: "May 2026",
    summary: "Predicts multiple medical conditions based on clinical health parameters using trained ML models, featuring SHAP & LIME explainability.",
    description: "Developed a comprehensive Disease Prediction System that assists healthcare scholars and clinical researchers in diagnosing multiple medical conditions based on patient biometric parameters. To build trust in AI recommendations, the platform integrates Explainable AI (XAI) frameworks (SHAP and LIME) to illustrate feature importance and decision rationale.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "SHAP", "LIME", "Pandas", "NumPy"],
    features: [
      "Multi-disease classification models trained on clinical datasets",
      "Interactive Streamlit web interface with immediate parameter sliders",
      "SHAP waterfall plots showing individual feature contributions to prediction score",
      "LIME localized model explanations for medical transparency",
      "Exportable summary report for medical scholars and practitioners"
    ],
    architecture: [
      "Streamlit Frontend UI",
      "Scikit-Learn Inference Pipeline",
      "SHAP / LIME Explanation Generator",
      "Pandas / NumPy Data Preprocessing"
    ],
    liveDemoUrl: "https://disease-detection-system-dmvwlfxyptxqhvq48xqnkm.streamlit.app/",
    githubUrl: "https://github.com/satyamkashyap4",
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
    technologies: ["Python", "Flask", "BERT", "NLP", "Transformers", "HTML5/CSS3", "JavaScript"],
    features: [
      "BERT semantic vector similarity calculation between resumes and job requirements",
      "ATS compatibility scoring dashboard with visual metric meters",
      "Skill gap detection highlights critical missing technologies",
      "Flask REST backend serving real-time NLP inference",
      "Clean web UI with PDF/DOCX file drag-and-drop parsing"
    ],
    architecture: [
      "Flask Microframework Backend",
      "HuggingFace Transformers / BERT Model",
      "Spacy / NLTK Text Normalization",
      "Vanilla JS & CSS Dashboard UI"
    ],
    liveDemoUrl: "https://ai-resume-analyzer-iihqbsjijcxl3r38jdnfmx.streamlit.app/",
    githubUrl: "https://github.com/satyamkashyap4",
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
    technologies: ["Python", "OpenCV", "NumPy", "Flask", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Real-time video frame processing for lane boundary line identification",
      "Canny edge detection and Hough Transform algorithm pipeline",
      "Visual and audio lane departure warning notifications",
      "Flask API streaming processed video buffer back to web client",
      "Interactive upload portal for custom dashcam footage testing"
    ],
    architecture: [
      "OpenCV Computer Vision Engine",
      "NumPy Matrix Operations",
      "Flask Video Streaming Backend",
      "Web Frontend Player UI"
    ],
    liveDemoUrl: "https://github.com/satyamkashyap4/Lane-Detection-Departure-Warning-System/blob/main/linedetection.py",
    githubUrl: "https://github.com/satyamkashyap4/Lane-Detection-Departure-Warning-System/blob/main/linedetection.py",
    featured: true,
    iconName: "Video",
    colorGradient: "from-cyan-500 to-blue-600"
  }
];

let inMemoryContacts = [];
let isConnectedToMongo = false;

const connectDB = async () => {
  const connString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/satyam_portfolio';
  try {
    await mongoose.connect(connString, {
      serverSelectionTimeoutMS: 2000
    });
    isConnectedToMongo = true;
    console.log(`[MongoDB] Connected successfully to ${connString}`);
  } catch (err) {
    isConnectedToMongo = false;
    console.warn(`[MongoDB] Local MongoDB connection unavailable (${err.message}). Using built-in high-performance in-memory data store.`);
  }
};

module.exports = {
  connectDB,
  getIsConnectedToMongo: () => isConnectedToMongo,
  initialProfile,
  initialProjects,
  inMemoryContacts
};
