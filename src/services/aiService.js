// backend/src/services/aiService.js
const { Groq } = require('groq-sdk');
require('dotenv').config();

const client = new Groq({
    apiKey: process.env.GROQ_API_KEY, // Ensure this is set in .env
});

exports.generateEmailText = async (prompt) => {
    try {
        const response = await client.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'user', content: prompt }],
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error generating email:', error);
        throw new Error('Failed to generate email');
    }
};