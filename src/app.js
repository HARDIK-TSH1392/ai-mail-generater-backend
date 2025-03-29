const express = require('express');
const cors = require('cors');
require('dotenv').config();

const emailRoutes = require('./routes/emailRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/email', emailRoutes);

module.exports = app;
