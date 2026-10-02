const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { getIsConnectedToMongo, inMemoryContacts } = require('../config/db');

// @route   POST /api/contact
// @desc    Receive visitor message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message fields are required.' });
    }

    const contactPayload = {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'Portfolio Inquiry').trim(),
      message: message.trim(),
      ip: req.ip || req.headers['x-forwarded-for'] || '127.0.0.1',
      createdAt: new Date()
    };

    if (getIsConnectedToMongo()) {
      const contactDoc = new Contact(contactPayload);
      await contactDoc.save();
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received.',
        data: contactDoc
      });
    }

    const savedMsg = { _id: 'c' + (inMemoryContacts.length + 1), ...contactPayload };
    inMemoryContacts.push(savedMsg);

    return res.status(201).json({
      success: true,
      message: 'Thank you, Satyam has received your message!',
      data: savedMsg
    });
  } catch (err) {
    console.error('Error submitting contact form:', err);
    return res.status(500).json({ message: 'Server error while saving contact message' });
  }
});

// @route   GET /api/contact
// @desc    List contact messages (Protected for owner only with admin key)
router.get('/', async (req, res) => {
  try {
    const adminKey = req.headers['x-admin-key'] || req.query.key;
    if (adminKey !== '9525' && adminKey !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized: Admin access key required.' });
    }

    if (getIsConnectedToMongo()) {
      const messages = await Contact.find().sort({ createdAt: -1 });
      return res.json(messages);
    }
    return res.json(inMemoryContacts);
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving messages' });
  }
});

module.exports = router;
