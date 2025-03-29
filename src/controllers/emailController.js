// backend/src/controllers/emailController.js
const { generateEmailText } = require('../services/aiService');
const { sendEmailService } = require('../services/emailService');

// Controller to handle AI email generation
exports.generateEmail = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) return res.status(400).json({ error: 'Prompt is required' });
        
        const emailContent = await generateEmailText(prompt);
        res.json({ email: emailContent });
    } catch (error) {
        console.error('Error generating email:', error);
        res.status(500).json({ error: 'Failed to generate email' });
    }
};

// Controller to handle email sending
exports.sendEmail = async (req, res) => {
    try {
        const { recipients, subject, body } = req.body;
        if (!recipients || !subject || !body) return res.status(400).json({ error: 'All fields are required' });
        
        await sendEmailService(recipients, subject, body);
        res.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
};