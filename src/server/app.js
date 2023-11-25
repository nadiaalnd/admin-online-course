const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5174; //

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const uri = 'mongodb://localhost:27017/ignition_db';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

// Routes
const userRoutes = require('./routes/routes');
app.use('/api/users', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
