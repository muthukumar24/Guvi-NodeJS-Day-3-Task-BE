const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', apiRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    
}).catch(error => {
    console.error('Error connecting to MongoDB', error);
});

