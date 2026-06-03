const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.login);

// Basic test route
router.get('/test', (req, res) => {
  res.json({ message: 'Test route is working!' });
});

// Hello route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the API routes!' });
});

// Example POST route
router.post('/echo', (req, res) => {
  res.json({
    message: 'Echo received',
    data: req.body
  });
});

module.exports = router;
