const express = require('express');
const { calculateFootprint } = require('../controllers/calculationController');
const router = express.Router();

router.post('/calculate', calculateFootprint);

module.exports = router;
