// routes/clientRoutes.js
const express = require('express');
const router = express.Router();
const path = require('path');

// Serve the login page
router.get('/auth/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

// Serve the signup page
router.get('/auth/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
});

// Serve the dashboard page
router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

// Serve the calculation page
router.get('/calculation', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/calculation.html'));
});

// Serve the 404 error page
router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});



module.exports = router;
