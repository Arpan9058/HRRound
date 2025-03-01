const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController'); // Import controller

const initialQuestion = "Tell me About Yourself";
let currentQuestion = initialQuestion;

router.get('/', (req, res) => {
    res.render('index', { question: currentQuestion });
});

router.post('/analyze-text', interviewController.analyzeText); // Route to controller

module.exports = router;