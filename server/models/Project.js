const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  subtitle: { type: String, required: true },
  category: { type: String, required: true, enum: ['AI/ML', 'Full Stack', 'Computer Vision'] },
  date: { type: String, required: true },
  summary: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String, required: true }],
  features: [{ type: String }],
  architecture: [{ type: String }],
  liveDemoUrl: { type: String, default: '#' },
  githubUrl: { type: String, default: '#' },
  featured: { type: Boolean, default: false },
  iconName: { type: String, default: 'Code' },
  colorGradient: { type: String, default: 'from-blue-500 to-indigo-600' }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
