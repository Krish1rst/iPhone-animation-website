require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.get('/', (req, res) => res.send('API Running'));

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
