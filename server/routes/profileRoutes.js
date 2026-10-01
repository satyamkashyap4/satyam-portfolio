const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const { getIsConnectedToMongo, initialProfile } = require('../config/db');

// @route   GET /api/profile
// @desc    Get user profile data
router.get('/', async (req, res) => {
  try {
    if (getIsConnectedToMongo()) {
      const profile = await Profile.findOne();
      if (profile) return res.json(profile);
    }
    return res.json(initialProfile);
  } catch (err) {
    console.error('Error fetching profile:', err);
    return res.json(initialProfile);
  }
});

module.exports = router;
