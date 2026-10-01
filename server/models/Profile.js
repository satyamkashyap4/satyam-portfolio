const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  headline: { type: String, required: true },
  bio: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  socialLinks: {
    linkedin: String,
    github: String
  },
  education: [{
    institution: String,
    degree: String,
    period: String,
    score: String,
    highlights: [String]
  }],
  skills: [{
    category: String,
    items: [String]
  }],
  achievements: [{
    title: String,
    role: String,
    organization: String,
    description: String
  }],
  languages: [String]
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
