require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Profile = require('./models/Profile');
const { initialProfile, initialProjects } = require('./config/db');

const seedDB = async () => {
  const connString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/satyam_portfolio';
  try {
    await mongoose.connect(connString);
    console.log('[Seed] Connected to MongoDB...');

    await Project.deleteMany({});
    await Profile.deleteMany({});

    await Project.insertMany(initialProjects);
    await Profile.create(initialProfile);

    console.log('[Seed] Database successfully seeded with Satyam Babu\'s resume data!');
    process.exit(0);
  } catch (err) {
    console.error('[Seed Error]:', err.message);
    process.exit(1);
  }
};

seedDB();
