// backend/src/services/emailService.js
const nodemailer = require('nodemailer');
const transporter = require('../config/emailConfig');

exports.sendEmailService = async (recipients, subject, body) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipients.join(','),
            subject,
            text: body,
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};
