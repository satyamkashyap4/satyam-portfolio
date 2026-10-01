const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { getIsConnectedToMongo, initialProjects } = require('../config/db');

// @route   GET /api/projects
// @desc    Get all projects
router.get('/', async (req, res) => {
  try {
    if (getIsConnectedToMongo()) {
      const projects = await Project.find().sort({ createdAt: -1 });
      if (projects.length > 0) {
        return res.json(projects);
      }
    }
    // Fallback to memory dataset
    return res.json(initialProjects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    return res.json(initialProjects);
  }
});

// @route   GET /api/projects/:idOrSlug
// @desc    Get single project by ID or slug
router.get('/:idOrSlug', async (req, res) => {
  try {
    const { idOrSlug } = req.params;
    if (getIsConnectedToMongo()) {
      const project = await Project.findOne({
        $or: [{ _id: idOrSlug }, { slug: idOrSlug }]
      });
      if (project) return res.json(project);
    }
    const memProject = initialProjects.find(p => p._id === idOrSlug || p.slug === idOrSlug);
    if (memProject) return res.json(memProject);

    return res.status(404).json({ message: 'Project not found' });
  } catch (err) {
    console.error('Error fetching single project:', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/projects
// @desc    Add a new project (Admin utility)
router.post('/', async (req, res) => {
  try {
    const newProjectData = req.body;
    if (getIsConnectedToMongo()) {
      const project = new Project(newProjectData);
      await project.save();
      return res.status(201).json(project);
    }
    const newProject = {
      _id: 'p' + (initialProjects.length + 1),
      ...newProjectData,
      createdAt: new Date().toISOString()
    };
    initialProjects.push(newProject);
    return res.status(201).json(newProject);
  } catch (err) {
    console.error('Error creating project:', err);
    return res.status(500).json({ message: 'Failed to create project', error: err.message });
  }
});

module.exports = router;
