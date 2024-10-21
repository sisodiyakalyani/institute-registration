require('dotenv').config(); // Add this line to load environment variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import Routes
const instituteRoutes = require('./routes/instituteroute');
const schoolRoutes = require('./routes/schoolroute');

const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
      console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
  });

app.use(bodyParser.json());

// Routes
app.use('/api', instituteRoutes);
app.use('/api/school', schoolRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
