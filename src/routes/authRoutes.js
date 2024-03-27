const express = require('express');
const { login, logout, verifyToken } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.get('/verify', verifyToken);

module.exports = router;
