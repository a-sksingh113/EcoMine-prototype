const express = require('express');
const connectDB = require('./config/db');
const authRoute = require('./routes/authRoute');
const calculationRoute = require('./routes/calculationRoute');
const dotenv = require('dotenv');
const path = require('path');
const publicRoute = require('./routes/publicRoute'); // Add this line

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup (if using EJS for templating)
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'client/views'));

// Routes
app.use('/auth', authRoute);
app.use('/calculation', calculationRoute);
app.use('/', publicRoute); // Add this line

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
