// backend/src/routes/emailRoutes.js
const express = require('express');
const { generateEmail, sendEmail } = require('../controllers/emailController');
const router = express.Router();

// Route to generate an AI-powered email
router.post('/generate', generateEmail);

// Route to send the email after editing
router.post('/send', sendEmail);

module.exports = router;
